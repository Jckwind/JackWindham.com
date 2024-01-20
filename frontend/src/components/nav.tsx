import React, { useState } from 'react';
import '@/components/css/nav.css';

import SlideOutMenu from '@/components/slide_out_menu';
import MenuButton from '@/components/menu_button';
import HoriztonalMenu from '@/components/horizontal_menu';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (!menuVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <a className={`main-button text-2xl`}>Jack Windham</a>
        </div>
        <HoriztonalMenu></HoriztonalMenu>
        <MenuButton toggleMenu={toggleMenu}></MenuButton>
      </div>
      <SlideOutMenu menuVisible={menuVisible}></SlideOutMenu>
    </>
  );
};

export default Navbar;
