import React from 'react';
import axios from 'axios';

import { PageTitle, PageFactory } from '~/components';
import { PageSection } from '~/shared/types';
import routes from '~/shared/routes';

interface Props {
  content?: PageSection[];
}

const BLM = ({ content }: Props) => (
  <>
    <PageTitle>BLM Resources</PageTitle>
    {content && content.map((section, index) => <PageFactory key={index} section={section} />)}
  </>
);

export async function getStaticProps() {
  const cmsRoute = routes.contentRoute(routes.blmResources);
  const { data } = await axios.get(cmsRoute);
  const content = data[0]?.content || null;
  return {
    props: {
      content,
    },
  };
};

export default BLM;
