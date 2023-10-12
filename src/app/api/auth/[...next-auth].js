// next-auth.js
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  pages: {
    signIn: "/",
  },
  providers: [
    GithubProvider({
      clientId: "fdd9bdc7a571a1fdd7a2",
      clientSecret: "7b8a52a0f2e302078c69f531012064d61c7a105c",
    }),
  ],

  callbacks: {
    session: ({ session, token }) => {
      console.log("session", { session, token });
    },
    jwt: async ({ token, user, account, trigger, session }) => {
      console.log("jwt  ", { token, user, account, trigger, session });
    },
  },
});
