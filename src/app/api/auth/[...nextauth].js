import InstagramProvider from 'next-auth/providers/instagram';

import NextAuth from 'next-auth';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'user_profile,user_media',
        },
      },
    }),
  ],
};
export default NextAuth(authOptions);
