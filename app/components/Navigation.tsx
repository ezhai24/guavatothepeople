import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import routes from '~/shared/routes';
import { mq, colors, images } from '~/shared/styles';

const Nav = styled.div({
  margin: '50px 0',
});

const Logo = styled.div({
  display: 'block',
  width: '60%',
  maxWidth: '200px',
  margin: '0 auto 25px',
  textAlign: 'center',
  '& img': {
    width: '100%',
  },
});

const Menu = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '0 auto',
  '& a': {
    display: 'flex',
    margin: '8px 15px',
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inconsolata',
    textTransform: 'uppercase',
    textDecoration: 'none',
    ':hover, :active': {
      color: colors.secondary,
    },
  },
  [mq[0]]: {
    width: 300,
  },
});

const Navigation = () => {
  return (
    <Nav>
      <Logo>
        <Link href={routes.home}>
          <a><img src={images.logo} /></a>
        </Link>
      </Logo>
      <Menu>
        <Link href={routes.about}>
          <a>About</a>
        </Link>
        <Link href={routes.blmResources}>
          <a>BLM Resources</a>
        </Link>
        <Link href={routes.connect}>
          <a>Connect</a>
        </Link>
        <Link href={routes.order}>
          <a>Order</a>
        </Link>
        <Link href={routes.donate}>
          <a>Donate</a>
        </Link>
      </Menu>
    </Nav>
  );
};

export default Navigation;
