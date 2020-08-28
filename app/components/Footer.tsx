import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import { Link } from '~/components';
import { Footer as FooterContent } from '~/shared/types';
import { mq } from '~/shared/styles';
import routes from '~/shared/routes';

const Container = styled.div({
  display: 'flex',
  width: '60%',
  margin: '90px auto 60px',
  borderTop: '1px solid gray',
  paddingTop: 20,
  [mq[0]]: {
    flexDirection: 'column',
  },
});

const Logo = styled.div({
  flex: 2,
  paddingTop: 35,
  paddingRight: 50,
  '> img': {
    width: '100%',
  }
});

const Section = styled.div({
  flex: 1,
  padding: 10,
});

const FooterLink = styled(Link)({
  textDecoration: 'none',
});

const Footer = () => {
  const [content, setContent] = useState<FooterContent>();

  useEffect(() => {
    const getFooterContent = async () => {
      const { data } = await axios.get(routes.footerContent);
      setContent(data);
    };
    getFooterContent();
  }, []);

  return (content ?
    <Container>
      {content.logo && <Logo><img src={content.logo.url} /></Logo>}
      {content.sections.map(section => (
        <Section>
          <h4>{section.title}</h4>
          {section.links.map(link => <FooterLink href={link.link}><p>{link.text}</p></FooterLink>)}
        </Section>
      ))}
    </Container>
  : null);
};

export default Footer;
