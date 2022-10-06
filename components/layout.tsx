import BottomNav from './BottomNav';
import Header from './Header';
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
