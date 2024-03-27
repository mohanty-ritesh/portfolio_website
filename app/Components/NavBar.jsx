"use client";
/* NavBar.js */
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import {motion} from "framer-motion"

const NavLinks = [
  { title: "about", path: "#about" },
  { title: "services", path: "#services" },
  { title: "portfolio", path: "#portfolio" },
  { title: "contact", path: "#contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-inherit px-8">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Replace with your logo image */}
        <Link href="/" className="w-auto">
          <img src="/Images/logo.png" alt="Your Logo" className="w-auto h-16 md:h-24 " />
        </Link>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}} className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </motion.div>

        <motion.div initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.3}} className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
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
