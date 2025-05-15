import React, { useState } from "react";
import logo from "../images/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header max-width flex items-center justify-between py-6 relative">
      {/* Left section: logo */}
      <div className="flex items-center gap-x-16">
        <img src={logo} alt="Web-logo" className="h-7 w-auto font-bold" />

        {/* Nav links for desktop */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-10 text-gray-400 font-medium">
            <li>
              <button className="hover:text-gray-700 transition">Features</button>
            </li>
            <li>
              <button className="hover:text-gray-700 transition">Pricing</button>
            </li>
            <li>
              <button className="hover:text-gray-700 transition">Resources</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right section: auth buttons (desktop) */}
      <ul className="hidden md:flex items-center gap-x-8 text-gray-400 font-medium">
        <li>
          <button className="hover:text-gray-700 transition">Login</button>
        </li>
        <li>
          <button className="rounded-full h-8 px-6 bg-[#2BD1D1] text-white font-bold hover:bg-[#9be3e2] transition">
            Sign Up
          </button>
        </li>
      </ul>

      {/* Hamburger menu icon (mobile only) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md mt-2 p-6 flex flex-col gap-4 text-center text-gray-600 z-50 md:hidden">
          <button className="hover:text-gray-900">Features</button>
          <button className="hover:text-gray-900">Pricing</button>
          <button className="hover:text-gray-900">Resources</button>
          <hr className="my-2" />
          <button className="hover:text-gray-900">Login</button>
          <button className="bg-[#2BD1D1] text-white py-2 rounded-full font-bold hover:bg-[#9be3e2]">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
