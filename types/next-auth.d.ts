import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string;
    } & DefaultSession['user'];
    id: string;
  }
}
declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
  }
}
