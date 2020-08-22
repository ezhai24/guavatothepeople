import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { PageTitle, PageFactory } from '~/components';
import routes from '~/shared/routes';

const Donate = () => {
  const [content, setContent] = useState([]);
  
  useEffect(() => {
    const getPageContent = async () => {
      const cmsRoute = routes.contentRoute(routes.donate);
      const { data } = await axios.get(cmsRoute);
      setContent(data[0].content);
    };
    getPageContent();
  }, []);

  return (
    <>
      <PageTitle>Donate</PageTitle>
      {content.map((section, index) => <PageFactory key={index} section={section} />)}
    </>
  );
};

export default Donate;
