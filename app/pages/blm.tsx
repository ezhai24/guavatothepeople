import React from 'react';
import axios from 'axios';

import { PageTitle, SectionFactory, Footer } from '~/components';
import { PageSection, Footer as FooterContent } from '~/shared/types';
import routes from '~/shared/routes';

interface Props {
  content?: PageSection[];
  footerContent?: FooterContent;
}

const BLM = ({ content, footerContent }: Props) => (
  <>
    <PageTitle>BLM Resources</PageTitle>
    {content && content.map((section, index) => <SectionFactory key={index} section={section} />)}
    {footerContent && <Footer content={footerContent} />}
  </>
);

export async function getStaticProps() {
  const cmsRoute = routes.contentRoute(routes.blmResources);
  const { data } = await axios.get(cmsRoute);
  const content = data[0]?.content || null;

  // Retrieve footer content on each page because getStaticProps is disabled
  // in custom _app.tsx. https://github.com/vercel/next.js/discussions/10949
  const { data: footerContent } = await axios.get(routes.footerContent);

  return {
    props: {
      content,
      footerContent,
    },
  };
};

export default BLM;
