"use client";

// @flow strict
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent relative">
      <div className="flex items-center justify-between py-5 px-4 md:px-8">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#50e7db] text-3xl font-bold">
            RPL <span className="text-[#ebf462]">SKANDA</span>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white hover:text-pink-600 focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute py-5 z-50 bg-[#1a1443] shadow-lg rounded-lg max-w-[250px] w-full right-0 top-full md:relative md:flex md:items-center md:bg-transparent md:shadow-none md:rounded-none md:max-w-full md:w-auto`}
          id="navbar-default"
        >
          <li className="group md:ml-4">
            <Link
              href="/#about"
              className="block px-4 py-2 no-underline outline-none hover:no-underline md:inline-block"
            >
              <div className="text-sm text-dark transition-colors duration-300 hover:text-primary md:text-white md:hover:text-pink-600">
                ABOUT
              </div>
            </Link>
          </li>
          <li className="group md:ml-4">
            <Link
              href="/#experience"
              className="block px-4 py-2 no-underline outline-none hover:no-underline md:inline-block"
            >
              <div className="text-sm text-dark transition-colors duration-300 hover:text-primary md:text-white md:hover:text-pink-600">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li className="group md:ml-4">
            <Link
              href="/#skills"
              className="block px-4 py-2 no-underline outline-none hover:no-underline md:inline-block"
            >
              <div className="text-sm text-dark transition-colors duration-300 hover:text-primary md:text-white md:hover:text-pink-600">
                SKILLS
              </div>
            </Link>
          </li>
          <li className="group md:ml-4">
            <Link
              href="/#education"
              className="block px-4 py-2 no-underline outline-none hover:no-underline md:inline-block"
            >
              <div className="text-sm text-dark transition-colors duration-300 hover:text-primary md:text-white md:hover:text-pink-600">
                EDUCATION
              </div>
            </Link>
          </li>
          <li className="group md:ml-4">
            <Link
              href="/blog"
              className="block px-4 py-2 no-underline outline-none hover:no-underline md:inline-block"
            >
              <div className="text-sm text-dark transition-colors duration-300 hover:text-primary md:text-white md:hover:text-pink-600">
                BLOGS
              </div>
            </Link>
          </li>
          <li className="group md:ml-4">
            <Link
              href="/#projects"
              className="block px-4 py-2 no-underline outline-none hover:no-underline md:inline-block"
            >
              <div className="text-sm text-dark transition-colors duration-300 hover:text-primary md:text-white md:hover:text-pink-600">
                PROJECTS
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
