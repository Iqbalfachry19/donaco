import { prisma } from '../../../common/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const user = await prisma.donation.findMany();

  return res.status(200).json({ user });
}
