import Header from './Header';
import BottomNav from './BottomNav';
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
