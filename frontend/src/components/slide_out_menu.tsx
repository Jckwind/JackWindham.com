import { Rubik } from 'next/font/google'
import React from "react";
import Link from "next/link";
import { routes } from '@/assets/routes';
import '@/components/css/slide_out_menu.css'

const rubik = Rubik({
  weight: "variable",
  style: ["italic", "normal"],
  display: "swap",
  subsets: ["latin"],
})

type SlideOutMenuProps = {
  menuVisible: boolean;
}

const SlideOutMenu: React.FC<SlideOutMenuProps> = ({ menuVisible }) => {

  return (
    <div className={`md:hidden flex flex-none menu-slide ${menuVisible ? 'active' : ''}`}>
      <ul className={`${rubik.className} slide-out-menu`} id="menu-content">
        {routes.map((route, index) => (
          <li key={index}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SlideOutMenu