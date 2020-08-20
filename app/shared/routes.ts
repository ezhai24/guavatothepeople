const routes = {
  home: '/',
  about: '/about',
  blmResources: '/blm',
  connect: '/connect',
  order: '/order',
  donate: '/donate',
};

const contentRoute = (pageRoute: string) => {
  const baseUrl = `${process.env.CMS_BASE}/pages?type=`;
  switch (pageRoute) {
    case routes.home:
      return baseUrl + 'home';
    case routes.about:
      return baseUrl + 'about';
    case routes.blmResources:
      return baseUrl + 'blm';
    case routes.connect:
      return baseUrl + 'connect';
    case routes.order:
      return baseUrl + 'order';
    case routes.donate:
      return baseUrl + 'donate';
  }
};

export default {
  ...routes,
  contentRoute,
};
