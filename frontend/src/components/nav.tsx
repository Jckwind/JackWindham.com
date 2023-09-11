import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "@/app/globals.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Jack Windham</a>
      </div>
      <div className="hidden md:flex flex-none">
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
      <div className="md:hidden flex flex-none">
        <button className="btn btn-circle btn-ghost" id="menu-toggle">
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          <i className="fas fa-bars"></i>
        </button>
        <ul className="menu hidden" id="menu-content">
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
