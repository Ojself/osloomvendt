import InstagramProvider from 'next-auth/providers/instagram';

import NextAuth from 'next-auth';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,

      params: {
        redirect_uri: 'https://www.osloomvendt.no',
      },
    }),
  ],
  /* callbacks: {
    async jwt({ token, user, session }) {
      // console.log("jwt callback", {token, user, session});
      // pass in user id and user type to token
      if (user && 'userType' in user) {
        return {
          ...token,
          id: user.id,
          usertype: user.userType,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      // console.log("session callback", { session, token, user });

      // Check if session exists
      if (token && 'usertype' in token) {
        // Update session user with id and usertype from token
        // session.user.usertype = token.usertype;

        return {
          ...session,
          user: {
            ...session.user,
            usertype: token.usertype,
          },
        };
      }

      // If session doesn't exist, return unchanged session
      return session;
    },
  }, */
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
};
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
