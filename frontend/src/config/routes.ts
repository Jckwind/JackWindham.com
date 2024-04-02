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
    name: 'Resume',
    path: '/resume',
    isExternal: false,
  }
];
