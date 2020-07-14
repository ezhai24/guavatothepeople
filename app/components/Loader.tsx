import React, { useState, useRef } from 'react';
import { useSpring, useTrail, useChain, animated } from 'react-spring';
import styled from '@emotion/styled';

const Background = styled(animated.div)({
  position: 'absolute',
  height: '100%',
  width: '100%',
  backgroundColor: 'white',
});

const Content = styled.div({
  position: 'absolute',
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  '> div': {
    marginTop: -25,
  },
});

const Text = styled(animated.div)({
  height: 140,
  marginTop: -25,
  lineHeight: '140px',
  fontFamily: 'Work Sans',
  fontSize: 144,
  color: 'white',
});

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

const Loader = ({ children }: Props) => {  
  const backgroundFlyInRef = useRef();
  const backgroundFlyInProps = useSpring({
    to: { height: '100%' }, 
    from: { height: '0%' },
    ref: backgroundFlyInRef,
  });

  const textRef = useRef();
  const text = ['BLACK', 'TRANS', 'LIVES', 'MATTER'];
  const trail = useTrail(text.length, {
    to: { opacity: 0, x: 35, height: 0 },
    from: { opacity: 1, x: 0, height: 140 },
    ref: textRef,
  });

  const backgroundFadeOutRef = useRef();
  const backgroundFadeOutProps = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    ref: backgroundFadeOutRef,
  });

  useChain([backgroundFlyInRef, textRef, backgroundFadeOutRef], [0, 1.2, 2]);

  return (
    <>
      <Background style={{ ...backgroundFadeOutProps }}>
        <animated.div
          style={{
            backgroundColor: 'black',
            ...backgroundFlyInProps,
            ...backgroundFadeOutProps
          }}
        />
      </Background>
      <Content>
        <div>
          {trail.map(({ x, height, ...rest }: any, index: number) => (
            <Text
              key={index}
              style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }} 
            >
              <animated.div style={{ height, overflowY: 'hidden' }}>
                {text[index]}
              </animated.div>
            </Text>
          ))}
        </div>
      </Content>
      <>{children}</>
    </>
  );
};

export default Loader;
