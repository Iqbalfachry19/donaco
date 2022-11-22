import { prisma } from '../../../../../common/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const user = await prisma.transaction.findMany({
    where: { userId: Number(req.query.id) },
  });
  const donationCount = await prisma.transaction.count({
    where: { userId: Number(req.query.id) },
  });
  const aggregations = await prisma.transaction.aggregate({
    where: { userId: Number(req.query.id) },
    _sum: {
      amount: true,
    },
  });

  return res
    .status(200)
    .json({ donation: { donationCount, user: [...user], aggregations } });
}
