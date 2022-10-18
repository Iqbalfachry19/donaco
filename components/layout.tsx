import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./Header'));
const BottomNav = dynamic(() => import('./BottomNav'));
type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <BottomNav />
    </>
  );
}
