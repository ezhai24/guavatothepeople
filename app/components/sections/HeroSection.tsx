import React from 'react';
import styled from '@emotion/styled';

import { mq } from '~/shared/styles';
import { HeroSection as HeroSectionType } from '~/shared/types';

const Hero = styled.div(({ backgroundUrl }: { backgroundUrl: string }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 500,
  backgroundImage: `url(${backgroundUrl})`,
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  [mq[0]]: {
    height: 300,
  },
}));

const Title = styled.h1({
  margin: 5,
  fontSize: 48,
  color: 'white',
  [mq[0]]: {
    fontSize: 32,
  },
});

const Subtitle = styled.p({
  margin: 5,
  color: 'white',
});

interface Props {
  content: HeroSectionType;
}

const HeroSection = ({ content }: Props) => {
  const { image, title, subtitle } = content;
  const { url } = image;
  return (
    <Hero backgroundUrl={url}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Hero>
  );
};

export default HeroSection;
