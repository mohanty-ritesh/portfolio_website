"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";

const NavLinks = [
  { title: "Hello!", path: "#hi" },
  { title: "About Me", path: "#about_me" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Lets Connect..", path: "#get_in_touch" }
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleLinkClick = (e) => {
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        const offset = 70; // Adjust this value based on your fixed header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 pt-2 left-0 right-0 z-10 bg-inherit xl:px-8">
      <div className="flex flex-wrap items-center justify-between mx-auto xl:px-4 ">
        <Link href="/">
          <img
            src="/Images/logo.png"
            alt="Your Logo"
            className="h-16 px-3 md:h-24 md:px-0"
          />
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mobile-menu block md:hidden mr-3"
        >
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="menu hidden md:block md:w-auto"
          id="navbar"
        >
          <ul className="flex md:p-0 md:flex-row md:space-x-5 ">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink title={link.title} href={link.path} />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {navbarOpen && <MenuOverlay links={NavLinks} />}
    </nav>
  );
};

export default NavBar;
