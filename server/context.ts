import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { unstable_getServerSession } from 'next-auth'; // 👈 added this

import { prisma } from '../common/prisma';
import { nextAuthOptions } from '../common/auth'; // 👈 added this

export async function createContext(ctx: trpcNext.CreateNextContextOptions) {
  const { req, res } = ctx;
  const session = await unstable_getServerSession(req, res, nextAuthOptions); // 👈 added this

  return {
    req,
    res,
    session, // 👈 added this
    prisma,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
