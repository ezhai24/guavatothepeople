import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { PageTitle, PageFactory } from '~/components';
import routes from '~/shared/routes';

const BLM = () => {
  const [content, setContent] = useState([]);
  
  useEffect(() => {
    const getPageContent = async () => {
      const cmsRoute = routes.contentRoute(routes.blmResources);
      const { data } = await axios.get(cmsRoute);
      setContent(data[0].content);
    };
    getPageContent();
  }, []);

  return (
    <>
      <PageTitle>BLM Resources</PageTitle>
      {content.map(section => <PageFactory key={section.id} section={section} />)}
    </>
  );
};

export default BLM;
