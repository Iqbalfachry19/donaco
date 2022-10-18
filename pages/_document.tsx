import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/image/logo.png" />
          <meta name="theme-color" content="#fff" />
          <link rel="shortcut icon" href="/image/logo.png" />
          <meta charSet="UTF-8" />
          <meta
            http-equiv="Content-Security-Policy"
            content="script-src 'none'"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
