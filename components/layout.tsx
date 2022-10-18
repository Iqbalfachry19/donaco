import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const Header = dynamic(() => import('./Header'), { suspense: true });
const BottomNav = dynamic(() => import('./BottomNav'), { suspense: true });
type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <main>{children}</main>
      <Suspense fallback={null}>
        <BottomNav />
      </Suspense>
    </>
  );
}
