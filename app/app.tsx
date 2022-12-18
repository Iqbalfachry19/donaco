'use client';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { SessionProvider } from 'next-auth/react';

export default function App({ children, session }: any) {
  return (
    <SessionProvider session={session}>
      <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
        {children}
      </ThirdwebProvider>
    </SessionProvider>
  );
}
