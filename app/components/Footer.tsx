import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import { Link } from '~/components';
import { Footer as FooterContent } from '~/shared/types';
import { mq, colors } from '~/shared/styles';
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

const LogoSection = styled.div({
  flex: 2,
  paddingTop: 35,
  paddingRight: 50,
  color: colors.secondary,
  fontSize: 14,
  '> img': {
    width: '100%',
    marginBottom: 5,
  },
  [mq[0]]: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const Section = styled.div({
  flex: 1,
  padding: 10,
});

const FooterLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
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
      <LogoSection>
        <img src={content.logo.url} />
        <div>Icons by <Link href="https://icons8.com/">Icon8</Link></div>
        <div>&#169;2020 <Link href="https://github.com/ezhai24">Emily Zhai</Link></div>
      </LogoSection>
      {content.sections.map((section, index) => (
        <Section key={index}>
          <h4>{section.title}</h4>
          {section.links.map((link, index) =>
            <FooterLink key={index} href={link.link}>
              <p>{link.text}</p>
            </FooterLink>
          )}
        </Section>
      ))}
    </Container>
  : null);
};

export default Footer;
