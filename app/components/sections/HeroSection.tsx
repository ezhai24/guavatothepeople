import React from 'react';
import styled from '@emotion/styled';

import { Button } from '~/components';
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
    height: 400,
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
  width: '60%',
  margin: 5,
  color: 'white',
});

const CTA = styled.div({
  marginTop: 20,
});

interface Props {
  content: HeroSectionType;
}

const HeroSection = ({ content }: Props) => {
  const { image, title, subtitle, actionLink, actionText } = content;
  const { url } = image;
  return (
    <Hero backgroundUrl={url}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {actionLink && actionText &&
        <CTA>
          <Button fill href={actionLink}>
            {actionText}
          </Button>
        </CTA>
      }
    </Hero>
  );
};

export default HeroSection;
