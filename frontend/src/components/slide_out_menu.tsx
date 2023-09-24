import React from "react";
import Link from "next/link";
import { routes } from '@/config/routes';
import '@/components/css/slide_out_menu.css'

type SlideOutMenuProps = {
  menuVisible: boolean;
}

const SlideOutMenu: React.FC<SlideOutMenuProps> = ({ menuVisible }) => {

  return (
    <div className={`md:hidden flex flex-none menu-slide ${menuVisible ? 'active' : ''}`}>
      <ul className="slide-out-menu" id="menu-content">
        {routes.map((route, index) => (
          <li key={index} className='bold'>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SlideOutMenu