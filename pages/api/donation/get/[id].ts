import { prisma } from '../../../../common/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const user = await prisma.donation.findUnique({
    where: {
      id: Number(req.query.id),
    },
  });

  return res.status(200).json({ user });
}
