import { query as q } from "faunadb";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "read:user",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // parametros de callback auth
      // console.log({ user });
      // console.log({ account });
      // console.log({ profile });
      // console.log({email})
      // console.log({credentials})

      const { email } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index("user_by_email"),
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(q.Collection("users"), {
              data: { email },
            }),
            q.Get(
              q.Match(
                q.Index("user_by_email"),
                q.Casefold(user.email)
              )
            )
          )
        );

        return true;
        
      } catch {
        return false;
      }
    },
  },
});
