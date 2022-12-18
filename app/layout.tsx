import './global.css';
import BottomNav from './BottomNav';

import App from './app';
import Header from './Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <App>
          <Header />
          {children}
          <BottomNav />
        </App>
      </body>
    </html>
  );
}
