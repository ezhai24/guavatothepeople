import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { PageTitle, PageFactory } from '~/components';
import routes from '~/shared/routes';

const Order = () => {
  const [content, setContent] = useState([]);
  
  useEffect(() => {
    const getPageContent = async () => {
      const cmsRoute = routes.contentRoute(routes.order);
      const { data } = await axios.get(cmsRoute);
      setContent(data[0].content);
    };
    getPageContent();
  }, []);
  
  return (
    <>
      <PageTitle>Order</PageTitle>
      { content.map(section => <PageFactory key={section.id} section={section} />) }
    </>
  );
};

export default Order;
