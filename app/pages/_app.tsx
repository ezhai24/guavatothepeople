import React from 'react';
import Head from 'next/head';
import { Loader } from '~/components';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Guava to the People</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader>
        <Component { ...pageProps } />
      </Loader>
    </>
  );
};

export default App;
