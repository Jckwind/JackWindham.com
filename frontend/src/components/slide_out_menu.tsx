<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { routes } from '@/config/routes';
import '@/components/css/slide_out_menu.css';

type SlideOutMenuProps = {
  menuVisible: boolean;
};

const SlideOutMenu: React.FC<SlideOutMenuProps> = ({ menuVisible }) => {
=======
import React from "react";
import Link from "next/link";
import { routes } from '@/config/routes';
import '@/components/css/slide_out_menu.css'

type SlideOutMenuProps = {
  menuVisible: boolean;
}

const SlideOutMenu: React.FC<SlideOutMenuProps> = ({ menuVisible }) => {

>>>>>>> main
  return (
    <div className={`md:hidden flex flex-none menu-slide ${menuVisible ? 'active' : ''}`}>
      <ul className="slide-out-menu" id="menu-content">
        {routes.map((route, index) => (
<<<<<<< HEAD
          <li key={index} className="bold">
=======
          <li key={index} className='bold'>
>>>>>>> main
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
<<<<<<< HEAD
  );
};

export default SlideOutMenu;
=======
  )
}

export default SlideOutMenu
>>>>>>> main
