import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  pages: {
    signIn: "/",
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
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        return credentials;
      },
    }),

    GithubProvider({
      clientId: "fdd9bdc7a571a1fdd7a2",
      clientSecret: "7b8a52a0f2e302078c69f531012064d61c7a105c",
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
      return {
        ...token,
        ...user,
      };
    },
  },
};
