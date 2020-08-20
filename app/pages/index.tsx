import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { PageFactory } from '~/components';
import routes from '~/shared/routes';

const Home = () => {
  const [content, setContent] = useState([]);
  
  useEffect(() => {
    const getPageContent = async () => {
      const cmsRoute = routes.contentRoute(routes.home);
      const { data } = await axios.get(cmsRoute);
      setContent(data[0].content);
    };
    getPageContent();
  }, []);

  return content.map((section, index) => <PageFactory key={index} section={section} />);
};

export default Home;
