import React from 'react';
import NextLink from 'next/link';
import styled from '@emotion/styled';

import routes from '~/shared/routes';
import { colors } from '~/shared/styles';

const ExternalLink = styled.a(({ primary }: { primary?: boolean }) => ({
  color: primary ? colors.primary : 'black',
  fontWeight: primary ? 700 : 400,
  cursor: 'pointer',
}));

const InternalLink = styled.div(({ primary }: { primary?: boolean }) => ({
  color: primary ? colors.primary : 'black',
  fontWeight: primary ? 700 : 400,
  textDecoration: 'underline',
  cursor: 'pointer',
}));

interface Props {
  href: string;
  children: string | React.ReactChild | React.ReactChild[];
  primary?: boolean;
}

const Link = (props: Props) => {
  const { href, children, primary } = props;
  const isExternal = Object.values(routes).every(route => route !== href);
  return (isExternal ?
    <ExternalLink primary={primary} href={href}>
      {children}
    </ExternalLink>
  :
    <NextLink href={href}>
      <InternalLink primary={primary}>
        {children}
      </InternalLink>
    </NextLink>
  );
};

export default Link;
