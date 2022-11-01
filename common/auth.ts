import { NextAuthOptions } from 'next-auth';

import { verify } from 'argon2';

import { prisma } from './prisma';
import { loginSchema } from './validation/auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    Credentials({
      id: 'email-password',
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jsmith@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        const creds = await loginSchema.parseAsync(credentials);

        const user: any = await prisma.user.findFirst({
          where: { email: creds.email },
        });

        if (user) {
          const isValidPassword = await verify(user.password, creds.password);
          if (isValidPassword) {
            return {
              id: user.id,
              email: user.email,
              name: user.username,
              admin: user.admin,
            };
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.admin = user.admin;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.id = token.id;
        session.admin = token.admin;
      }

      return session;
    },
  },
  jwt: {
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },
  pages: {
    signIn: '/log-in',
    newUser: '/sign-up',
  },
};
