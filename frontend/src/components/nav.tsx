import React from "react";
import Link from "next/link";
import "@/app/globals.css";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Jack Windham</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      );
};

export default Navbar;
