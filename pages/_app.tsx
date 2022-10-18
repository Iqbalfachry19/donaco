import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { Session } from 'next-auth';
import { withTRPC } from '@trpc/next';
import { SessionProvider } from 'next-auth/react';
import { ServerRouter } from '../server/router';
import { ThirdwebProvider } from '@thirdweb-dev/react';
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
