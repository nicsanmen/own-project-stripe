import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { Link } from "react-router-dom";
import icon from "../assets/header-icon.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-secondery text-white fixed w-full z-10 content-center">
      <a href="/" className="logo text-2xl font-bold text-accent">
        <img src={icon} alt="logo" className="w-10 h-10 rounded-full" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block content-center">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#timeline">Timeline</a>
          </li>
          {/* <li>
            <Link to="/blog">Blog</Link>
          </li> */}
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/17QwIt22ht4HgzrJl6IWnxWAWUuhQ7Iyl/view?usp=sharing"
              target="_blank"
              without
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#timeline">Timeline</a>
          </li>
          {/* <li>
            <a href="/#blog">Blog</a>
          </li> */}
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/17QwIt22ht4HgzrJl6IWnxWAWUuhQ7Iyl/view?usp=sharing"
              target="_blank"
              without
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
