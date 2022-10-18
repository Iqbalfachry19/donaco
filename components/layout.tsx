import BottomNav from './BottomNav';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./Header'));
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
