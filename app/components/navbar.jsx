"use client";

// @flow strict
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <nav
      className={`${
        scrolled ? "bg-blur-navbar backdrop-filter-blur-10" : "bg-transparent"
      } fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container flex items-center justify-between py-3 px-4 md:px-8 relative">
        <div className="flex items-center mx-auto md:mx-0">
          <Image
            src={personalData.logo}
            width={280}
            height={280}
            alt="Logo"
            className="rounded-lg cursor-pointer no-download"
            onClick={toggleMenu}
            onContextMenu={handleContextMenu}
          />
        </div>

        <ul
          className={`${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } absolute py-5 z-50 bg-[#1a1443] shadow-lg rounded-lg max-w-[250px] w-full right-0 top-full transition-all duration-300 md:relative md:flex md:items-center md:bg-transparent md:shadow-none md:rounded-none md:max-w-full md:w-auto md:opacity-100 md:max-h-full`}
          id="navbar-default"
        >
          {[
            { href: "/#home", label: "HOME" },
            { href: "/#about", label: "ABOUT" },
            { href: "/#experience", label: "ROLES" },
            { href: "/#skills", label: "SKILLS" },
            { href: "/#education", label: "EDUCATION" },
            { href: "/#projects", label: "PROJECTS" },
            { href: "/blog", label: "PORTFOLIO" },
          ].map(({ href, label }) => (
            <li className="group md:ml-4" key={href}>
              <Link
                href={href}
                className="block px-4 py-2 no-underline outline-none hover:no-underline md:inline-block"
              >
                <div className="text-sm text-dark transition-colors duration-300 hover:text-primary md:text-white md:hover:text-pink-600">
                  {label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
