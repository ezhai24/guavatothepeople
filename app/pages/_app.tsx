import React, { CSSProperties } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTransition, animated } from 'react-spring';
import styled from '@emotion/styled';

import { Loader, Navigation, Footer } from '~/components';

const Content = styled(animated.div)({
  width: '100%',
  boxSizing: 'border-box',
});

const App = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  // Including dummy "delayDummy" property to prevent overlap of enter and leave animations
  // https://github.com/react-spring/react-spring/issues/583
  const pages = [{ pathname, Component, pageProps }];
  const transitions = useTransition(pages, page => page.pathname, {
    config: { mass: 1, tension: 300, friction: 26 },
    from: { opacity: 0, delayDummy: 0 } as CSSProperties,
    enter: [{ delayDummy: 1 }, { opacity: 1 }] as CSSProperties[],
    leave: [{ opacity: 0 }],
  });
  
  return (
    <>
      <Head>
        <title>Guava to the People</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader>
        <Navigation />
        <>
          {transitions.map(({ item, key, props }) => {
            const { Component, pageProps } = item;
            return (
              <Content key={key} style={props}>
                <Component {...pageProps} />
              </Content>
            );
          })}
        </>
        <Footer />
      </Loader>
    </>
  );
};

export default App;
