import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

import { Button } from '~/components';
import { mq } from '~/shared/styles';
import { RowCell as RowCellType, RowSection as RowSectionContent } from '~/shared/types';

const Row = styled.div({
  display: 'flex',
  width: '80%',
  margin: '0 auto 60px',
  '> div': {
    flex: 1,
    padding: '0px 40px',
  },
  [mq[0]]: {
    flexDirection: 'column',
  },
});

interface Props {
  content: RowSectionContent;
}

const RowCell = (cell: RowCellType) => {
  const { title, subtitle, text, actionText, actionLink } = cell;
  return (
    <div>
      <h2>{title}</h2>
      <p><b>{subtitle}</b></p>
      <ReactMarkdown source={text} />
      {actionText && actionLink &&
        <Button href={actionLink}>{actionText}</Button>
      }
    </div>
  );
};

const RowSection = ({ content }: Props) => {
  const { cells } = content;
  return <Row>{cells.map((cell, index) => <RowCell key={index} {...cell} />)}</Row>;
};

export default RowSection;
