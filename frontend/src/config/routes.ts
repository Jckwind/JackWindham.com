type Route = {
  name: string;
  path: string;
  isExternal: boolean;
};

export const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
    isExternal: false,
  },
  {
    name: 'About',
    path: '/about',
    isExternal: false,
  },
  {
    name: 'Contact',
    path: '/contact',
    isExternal: false,
  },
];
