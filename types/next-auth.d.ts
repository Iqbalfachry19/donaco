import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address?: string | null | undefined;
    } & DefaultSession['user'];
    id: string;
    admin?: boolean | null | undefined;
  }
  interface User {
    admin?: boolean | null | undefined;
  }
}
declare module 'next-auth/jwt' {
  interface JWT {
    id: string;

    admin: boolean | null | undefined;
  }
}
