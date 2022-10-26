'use client';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { SessionProvider } from 'next-auth/react';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
        {children}
      </ThirdwebProvider>
    </SessionProvider>
  );
}
