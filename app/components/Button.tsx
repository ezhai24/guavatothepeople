import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import routes from '~/shared/routes';
import { colors } from '~/shared/styles';

const ButtonContainer = styled.div(({ fill }: { fill: boolean }) => ({
  border: `3px solid ${colors.primary}`,
  padding: '5px 30px',
  backgroundColor: fill ? colors.primary : 'transparent',
  fontWeight: 700,
  color: fill ? 'white' : colors.primary,
  textTransform: 'uppercase',
  cursor: 'pointer',
}));

interface Props {
  href: string;
  children: string | React.ReactChild | React.ReactChild[];
  fill?: boolean;
}

export const Button = (props: Props) => {
  const { href, children, fill } = props;
  const isExternal = Object.values(routes).every(route => route !== href);
  return (isExternal ?
    <a href={href}>
      <ButtonContainer fill={fill}>{children}</ButtonContainer>
    </a>
  :
    <Link href={href}>
      <ButtonContainer fill={fill}>{children}</ButtonContainer>
    </Link>
  );
};

export default Button;
