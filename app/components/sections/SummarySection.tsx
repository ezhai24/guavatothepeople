import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

import { Link } from '~/components';
import { SummarySection as SummarySectionContent } from '~/shared/types';

const Container = styled.div({
  width: '60%',
  margin: '0 auto 60px',
  textAlign: 'center',
});

interface Props {
  content: SummarySectionContent;
}

const SummarySection = ({ content }: Props) => {
  const { title, text, actionText, actionLink } = content;
  return (
    <Container>
      <h2>{title}</h2>
      <ReactMarkdown source={text} />
      {actionText && actionLink &&
        <Link primary href={actionLink}>{actionText}</Link>
      }
    </Container>
  );
};

export default SummarySection;
