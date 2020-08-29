import React from 'react';
import styled from '@emotion/styled';

import { Link, Icon } from '~/components';
import { mq } from '~/shared/styles';
import {
  Contact as ContactType,
  ContactSection as ContactSectionContent,
} from '~/shared/types';

const Container = styled.div({
  float: 'right',
  width: '30%',
  height: 'calc(100vh - 303px)',
  marginLeft: 100,
  marginRight: '10%',
  [mq[0]]: {
    float: 'none',
    width: '60%',
    height: 'auto',
    margin: '0 auto 60px',
    wordWrap: 'break-word',
  },
});

const ContactContainer = styled.div({
  marginBottom: 20,
});

interface Props {
  content: ContactSectionContent;
}

const Contact = (contact: ContactType) => {
  const { title, email } = contact;
  return (
    <ContactContainer>
      <div><b>{title}</b></div>
      <Link href={`mailto:${email}`}>{email}</Link>
    </ContactContainer>
  );
};

const ContactSection = ({ content }: Props) => {
  const { contacts, socials } = content;
  return (
    <Container>
      {contacts.map((contact, index) => <Contact key={index} {...contact} />)}
      {socials.map((social, index) => <Icon key={index} {...social} />)}
    </Container>
  );
};

export default ContactSection;
