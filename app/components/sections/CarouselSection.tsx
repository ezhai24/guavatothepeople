import React from 'react';
import styled from '@emotion/styled';

import { Link } from '~/components';
import { ImageComponent, CarouselSection as CarouselSectionContent } from '~/shared/types';

const SectionTitle = styled.h2({
  width: '60%',
  margin: '0 auto',
});

const Carousel = styled.div({
  display: 'flex',
  marginTop: 30,
  marginBottom: 60,
  paddingLeft: 'calc(20% - 20px)',
  overflowX: 'scroll',
  whiteSpace: 'nowrap',
});

const Item = styled.div({
  display: 'inline-block',
  height: 200,
  width: 200,
  margin: '0px 20px',
  borderRadius: '50%',
});

const CarouselImage = styled.div(({ backgroundUrl }: { backgroundUrl: string }) => ({
  height: '100%',
  width: '100%',
  borderRadius: '50%',
  backgroundImage: `url(${backgroundUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const ImageCaption = styled.div({
  marginTop: 10,
  textAlign: 'center',
});

interface Props {
  content: CarouselSectionContent;
}

const CarouselItem = (item: ImageComponent) => {
  const { image: { url }, link, caption } = item;
  return (
    <Link href={link}>
      <Item>
        <CarouselImage backgroundUrl={url} />
        <ImageCaption>{caption}</ImageCaption>
      </Item>
    </Link>
  );
};

const CarouselSection = ({ content }: Props) => {
  const { title, items } = content;
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <Carousel>
        {items.map((item, index) => <CarouselItem key={index} {...item} />)}
      </Carousel>
    </>
  );
};

export default CarouselSection;
