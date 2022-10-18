import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { withTRPC } from '@trpc/next';
import { ServerRouter } from '../server/router';
import dynamic from 'next/dynamic';
const SessionProvider = dynamic(() =>
  import('next-auth/react').then((res) => res.SessionProvider),
);
const ThirdwebProvider = dynamic(() =>
  import('@thirdweb-dev/react').then((res) => res.ThirdwebProvider),
);
const Layout = dynamic(() => import('../components/layout'));
const App = ({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ThirdwebProvider desiredChainId={80001}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    </SessionProvider>
  );
};

export default withTRPC<ServerRouter>({
  config() {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
      headers: {
        'x-ssr': '1',
      },
    };
  },
  ssr: true,
})(App);
