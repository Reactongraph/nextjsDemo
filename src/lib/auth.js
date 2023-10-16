import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

async function refreshAccessToken(token) {
  try {
    const payload = {
      refreshToken: token.refreshToken,
    };

    // DATABASE LOOKUP
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/auth/refresh-tokens`,
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "en-US",
        },
      }
    );
    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }
    return {
      ...token,
      accessToken: refreshedTokens.access.token,
      accessTokenExpires: refreshedTokens.access.expires,
      refreshToken: token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
export const authOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("credentials", credentials);
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URI}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            headers: {
              "Content-Type": "application/json",
              "Accept-Language": "en-US",
            },
          }
        );

        const user = await res.json();

        console.log("user response from api", user);

        if (!res.ok) {
          throw new Error(user.message);
        }

        if (user.user.role === "admin") {
          throw new Error("Invalid Credentials");
        }

        // Return null if user data could not be retrieved

        if (res.ok && user) {
          const { id, name, email } = user?.user || "";
          const { access, refresh } = user.tokens || "";
          return {
            id,
            name,
            email,
            accessToken: access.token,
            refreshToken: refresh.token,
            accessTokenExpires: access.expires,
            refreshTokenExpires: refresh.expires,
          };
        }
        return null;
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          ...token,
        },
      };
    },
    jwt: async ({ token, user, account, trigger, session }) => {
      if (account && user) {
        if (account.provider === "github") {
          console.log("account", account);
          console.log("user", user);
          console.log("token", token);
          const payload = {
            profileImage: token.picture,
            email: token.email,
            name: token.name,
          };

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URI}/auth/socialMediaLoginSignup`,
            {
              method: "POST",
              body: JSON.stringify(payload),
              headers: {
                "Content-Type": "application/json",
                "Accept-Language": "en-US",
              },
            }
          );

          const loginResponse = await res.json();

          if (!loginResponse?.user || !loginResponse?.tokens) {
            return null;
          }

          const {
            user: { id, name, email },
            tokens: { access, refresh },
          } = loginResponse;

          return {
            ...token,
            id,
            name,
            email,
            accessToken: access.token,
            refreshToken: refresh.token,
            accessTokenExpires: access.expires,
            refreshTokenExpires: refresh.expires,
          };
        }

        return {
          ...token,
          ...user,
        };
      }

      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      if (Date.now() < new Date(token.accessTokenExpires).getTime() - 20000) {
        return token;
      }
      return refreshAccessToken(token);
    },
  },
};
