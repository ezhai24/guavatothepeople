import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { Global } from '@emotion/core';

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Open+Sans:wght@400;700&family=Work+Sans:wght@900&display=swap" rel="stylesheet" />
          <Global
            styles={{
              'html, body, #__next': {
                height: '100%',
                margin: 0,
                fontFamily: 'Open Sans, sans-serif',
              },
              'h1, h2': {
                fontFamily: 'Inconsolata, sans-serif',
              },
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document;
