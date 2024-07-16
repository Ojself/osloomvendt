import InstagramProvider from 'next-auth/providers/instagram';
import NextAuth from 'next-auth';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    }),
  ],
};
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
