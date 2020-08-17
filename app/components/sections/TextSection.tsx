import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

import { mq } from '~/shared/styles';
import { TextSection as TextSectionContent, ImageAlignment } from '~/shared/types';

const Container = styled.div({
  width: '80%',
  margin: '0 auto 60px',
});

const Image = styled.img(({ align }: { align: ImageAlignment }) => ({
  float: align === ImageAlignment.LEFT ? 'left' : 'right',
  width: '40%',
  marginTop: 3,
  marginRight: align === ImageAlignment.LEFT ? 15 : 0,
  marginLeft: align === ImageAlignment.LEFT ? 0 : 15,
  [mq[0]]: {
    width: '100%',
    marginBottom: 15,
  },
}));

interface Props {
  content: TextSectionContent;
}

const TextSection = ({ content }: Props) => {
  const { title, text, image, alignImage } = content;
  const { url } = image || {};

  return (
    <Container>
      <h2>{title}</h2>
      {image && <Image src={url} align={alignImage} />}
      <div><ReactMarkdown source={text} /></div>
    </Container>
  );
};

export default TextSection;
