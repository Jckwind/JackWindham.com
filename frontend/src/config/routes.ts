type Route = {
<<<<<<< HEAD
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
=======
    name: string;
    path: string;
};

export const routes: Route[] = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Hire', path: '/hire' },
    { name: 'Contact', path: '/contact' },

>>>>>>> main
];
