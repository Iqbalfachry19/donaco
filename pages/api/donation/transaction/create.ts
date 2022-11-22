import { prisma } from '../../../../common/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const user = await prisma.transaction.create({
    data: {
      userId: Number(req.body.userId),
      amount: Number(req.body.amount),
    },
  });

  return res.status(200).json({ user });
}
