import React from 'react';
import axios from 'axios';

import { PageTitle, PageFactory } from '~/components';
import { PageSection } from '~/shared/types';
import routes from '~/shared/routes';

interface Props {
  content: PageSection[];
}

const About = (props: Props) => {
  const { content } = props;
  return (
    <>
      <PageTitle>About Us</PageTitle>
      { content.map(section => <PageFactory key={section.id} section={section} />) }
    </>
  );
};

export const getStaticProps = async () => {
  const cmsRoute = routes.contentRoute(routes.about);
  const { data } = await axios.get(cmsRoute);
  return {
    props: {
      content: data[0].content,
    },
  };
};

export default About;
