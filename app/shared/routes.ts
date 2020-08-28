const pageRoutes = {
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
    case pageRoutes.home:
      return baseUrl + 'home';
    case pageRoutes.about:
      return baseUrl + 'about';
    case pageRoutes.blmResources:
      return baseUrl + 'blm';
    case pageRoutes.connect:
      return baseUrl + 'connect';
    case pageRoutes.order:
      return baseUrl + 'order';
    case pageRoutes.donate:
      return baseUrl + 'donate';
  }
};

export default {
  ...pageRoutes,
  contentRoute,
  footerContent: `${process.env.CMS_BASE}/footer`,
};
