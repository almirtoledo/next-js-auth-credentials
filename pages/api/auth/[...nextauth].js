import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { EDGE_RUNTIME_WEBPACK } from "next/dist/shared/lib/constants";

export const authOptions = {
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credentials, req) {

        const payload = {
          email: credentials.email,
          password: credentials.passwd
        }

        const res = await fetch('??', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          },
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(user.exception);
        }

        // user
        const user = {
          token: data.access_token,
          name: data.user.name,
          email: data.user.email
        }

        if (res.ok && data.user) {
          return user;
        }

        return null;

      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      return token;
    }
  },

};

export default NextAuth(authOptions);

