import { NextApiRequest, NextApiResponse } from 'next';
import { getUser } from './[...nextauth]';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Get the authenticated user from the request
  const user = await getUser(req, res);

  // If the user is not authenticated, user will be null
  if (!user) {
    return res.status(401).json({
      message: 'Not authorized.',
    });
  }

  // Otherwise, user.address will be set
  return res.status(200).json({
    address: user.user.address,
  });
};

export default handler;
