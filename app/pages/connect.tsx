import React from 'react';
import axios from 'axios';

import { PageTitle, SectionFactory } from '~/components';
import { PageSection } from '~/shared/types';
import routes from '~/shared/routes';

interface Props {
  content?: PageSection[];
}

const Connect = ({ content }: Props) => (
  <>
    <PageTitle>Connect</PageTitle>
    {content && content.map((section, index) => <SectionFactory key={index} section={section} />)}
  </>
);

export async function getStaticProps() {
  const cmsRoute = routes.contentRoute(routes.connect);
  const { data } = await axios.get(cmsRoute);
  const content = data[0]?.content || null;
  return {
    props: {
      content,
    },
  };
};

export default Connect;
