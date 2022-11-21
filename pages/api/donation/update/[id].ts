import { prisma } from '../../../../common/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const user = await prisma.donation.update({
    where: {
      id: Number(req.query.id),
    },
    data: {
      currentDonation: Number(req.body.currentDonation),
      donationAmount: Number(req.body.donationAmount),
    },
  });

  return res.status(200).json({ user });
}
