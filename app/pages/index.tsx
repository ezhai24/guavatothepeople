import React from 'react';
import axios from 'axios';

import { PageFactory } from '~/components';
import { PageSection } from '~/shared/types';
import routes from '~/shared/routes';

interface Props {
  content: PageSection[];
}

const Home = (props: Props) => {
  const { content } = props;
  return content.map((section, index) => <PageFactory key={index} section={section} />);
};

export const getStaticProps = async () => {
  const cmsRoute = routes.contentRoute(routes.home);
  const { data } = await axios.get(cmsRoute);
  return {
    props: {
      content: data[0].content,
    },
  };
};

export default Home;
