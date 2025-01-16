import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className="z-50 flex items-center justify-between px-10 backdrop-blur-sm backdrop-brightness-75 backdrop-saturate-150 shadow-lg mt-6 rounded-full w-11/12 fixed left-1/2 transform -translate-x-1/2 h-16">
      <Link to="/home" className="flex justify-center md:justify-start w-full md:w-auto">
        <img alt="AdAstraLogo" className="h-5 w-auto" src={Logo} />
      </Link>

      <div className="hidden md:flex items-center space-x-2 text-white">
        <ul className="flex items-center space-x-2">
          <li>
            <Link to="/about" className="px-1 py-2 hover:text-neutral-400">About Us</Link>
          </li>
          <li><span className="text-gray-400 px-2">|</span></li>
          <li>
            <Link to="/merch" className="px-1 py-2 hover:text-neutral-400">Merch</Link>
          </li>
        </ul>
      </div>

      <button onClick={toggleNav} className="block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {isOpen && (
        <>
          <button
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleNav}
            aria-label="Close navigation"
          />
          <div className="absolute top-0 left-0 right-0 bg-black z-50 mt-16 p-4 rounded-lg shadow-md">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link to="/about" className="px-2 py-1 text-white" onClick={closeNav}>About Us</Link>
              </li>
              <li>
                <Link to="/merch" className="px-2 py-1 text-white" onClick={closeNav}>Merch</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
