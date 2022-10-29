import './global.css';
import BottomNav from './BottomNav';
import Header from './Header';
import App from './app';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Donaco</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/image/logo.png" />
        <meta name="theme-color" content="#fff" />
        <link rel="shortcut icon" href="/image/logo.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <App>
          <Header />
          <main>{children}</main>
          <BottomNav />
        </App>
      </body>
    </html>
  );
}
