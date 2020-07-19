import React, { useState, useRef } from 'react';
import { useSpring, useTrail, useChain, animated } from 'react-spring';
import styled from '@emotion/styled';

const LoaderComponent = styled.div(({ isLoading }: { isLoading: boolean }) => ({
  display: isLoading ? 'block' : 'none',
}));

const Background = styled(animated.div)({
  position: 'absolute',
  height: '100%',
  width: '100%',
  backgroundColor: 'white',
});

const TextContainer = styled.div({
  position: 'absolute',
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  '> div': {
    height: '36vw',
  },
});

const Text = styled(animated.div)({
  height: '8vw',
  fontFamily: 'Work Sans',
  fontSize: '10vw',
  color: 'white',
});

const Content = styled.div(({ isLoading }: { isLoading: boolean }) => ({
  height: isLoading ? '100vh' : 'auto',
  overflowY: 'hidden',
}));

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

const Loader = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const backgroundFlyInRef = useRef();
  const backgroundFlyInProps = useSpring({
    to: { height: '100%' }, 
    from: { height: '0%' },
    ref: backgroundFlyInRef,
  });

  const textRef = useRef();
  const text = ['BLACK', 'TRANS', 'LIVES', 'MATTER'];
  const trail = useTrail(text.length, {
    to: { opacity: 0, x: 4, height: '0vw' },
    from: { opacity: 1, x: 0, height: '10vw' },
    ref: textRef,
  });

  const backgroundFadeOutRef = useRef();
  const backgroundFadeOutProps = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    ref: backgroundFadeOutRef,
    onRest: () => setIsLoading(false),
  });

  useChain([backgroundFlyInRef, textRef, backgroundFadeOutRef], [0, 1.2, 2]);

  return (
    <>
      <LoaderComponent isLoading={isLoading}>
        <Background style={{ ...backgroundFadeOutProps }}>
          <animated.div
            style={{
              backgroundColor: 'black',
              ...backgroundFlyInProps,
              ...backgroundFadeOutProps
            }}
          />
        </Background>
        <TextContainer>
          <div>
            {trail.map(({ x, height, ...rest }: any, index: number) => (
              <Text
                key={index}
                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}vw,0)`) }} 
              >
                <animated.div style={{ height, overflowY: 'hidden' }}>
                  {text[index]}
                </animated.div>
              </Text>
            ))}
          </div>
        </TextContainer>
      </LoaderComponent>
      <Content isLoading={isLoading}>
        {children}
      </Content>
    </>
  );
};

export default Loader;
