import React from 'react';
import styled from '@emotion/styled';

import { Link, Icon } from '~/components';
import { DonationSection as DonationSectionContent } from '~/shared/types';

const Container = styled.div({
  width: '80%',
  margin: '0px auto 60px',
  textAlign: 'center',
});

const IconRow = styled.div({
  marginLeft: 10,
});

const IconContainer = styled.div({
  display: 'inline-block',
  margin: '15px 5px 0px',
});

interface Props {
  content: DonationSectionContent;
}

const DonationSection = ({ content }: Props) => {
  const { organizationName, organizationLink, socials } = content;
  return (
    <Container>
      <div>
        <div><b>Supporting this Month</b></div>
        {organizationLink
          ? <Link href={organizationLink}>{organizationName}</Link>
          : organizationName
        }
      </div>
      <IconRow>
        {socials.map((social, index) =>
          <IconContainer><Icon key={index} {...social} /></IconContainer>
        )}
      </IconRow>
    </Container>
  );
};

export default DonationSection;
