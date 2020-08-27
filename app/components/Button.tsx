import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import routes from '~/shared/routes';
import { colors } from '~/shared/styles';

const ButtonContainer = styled.div(({ primary }: { primary: boolean }) => ({
  display: 'inline-block',
  border: `3px solid ${colors.primary}`,
  padding: '5px 30px',
  backgroundColor: primary ? colors.primary : 'transparent',
  textAlign: 'center',
  fontWeight: 700,
  color: primary ? 'white' : colors.primary,
  textTransform: 'uppercase',
  cursor: 'pointer',
}));

interface Props {
  href: string;
  children: string | React.ReactChild | React.ReactChild[];
  primary?: boolean;
}

export const Button = (props: Props) => {
  const { href, children, primary } = props;
  const isExternal = Object.values(routes).every(route => route !== href);
  return (isExternal ?
    <a href={href}>
      <ButtonContainer primary={primary}>{children}</ButtonContainer>
    </a>
  :
    <Link href={href}>
      <ButtonContainer primary={primary}>{children}</ButtonContainer>
    </Link>
  );
};

export default Button;
