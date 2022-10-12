import { ThirdwebNextAuth } from '@thirdweb-dev/auth/next-auth';
import { nextAuthOptions } from '../../../common/auth';

export const { NextAuthHandler, getUser } = ThirdwebNextAuth({
  privateKey: process.env.ADMIN_PRIVATE_KEY || '',
  domain: 'donaco.vercel.app',
  nextOptions: nextAuthOptions,
});

export default NextAuthHandler();
