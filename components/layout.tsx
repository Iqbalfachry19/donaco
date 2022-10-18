import BottomNav from './BottomNav';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Header = dynamic(() => import('./Header'), {
  suspense: true,
});

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Suspense fallback={`Loading...`}>
        <Header />
      </Suspense>
      <main>{children}</main>
      <BottomNav />
    </>
  );
}
