"use client";

import { navList } from "@/data/navList";
import Link from "next/link";
import LoginButton from "../ui/LoginButton";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleOpenNav = () => {
    setNavIsOpen(true);
  };
  const handleCloseNav = () => {
    setNavIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between bg-white px-2 py-2">
      <div className="text-2xl font-bold italic text-primary">Passlock</div>
      <nav
        className={`bottom-0 right-0 top-14 max-sm:absolute ${
          navIsOpen ? "max-sm:translate-x-0" : "max-sm:translate-x-full"
        } transition max-sm:left-2/4 max-sm:bg-white max-sm:py-5 max-sm:shadow-lg
      `}
      >
        <ul className="flex items-center gap-4 max-sm:mt-5 max-sm:flex-col md:gap-x-8">
          {navList.map((item, index) => (
            <li key={index} className="group relative">
              <Link
                href={item.href}
                className="transition max-sm:hover:text-accent"
              >
                {item.title}
              </Link>
              <span className="absolute -bottom-3 left-1/2 right-0 h-1 w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-full max-sm:hidden"></span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-x-4">
        <LoginButton
          title="Demo"
          styles="rounded border border-accent bg-accent px-5 py-0.5 text-white hover:bg-accentDark transition"
        />
        <div className="relative h-7 w-7 sm:hidden">
          <button
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition ${
              navIsOpen ? "scale-0" : ""
            }`}
            onClick={handleOpenNav}
          >
            <RiMenu3Line className="h-6 w-6" />
          </button>
          <button
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition ${
              navIsOpen ? "" : "scale-0"
            }`}
            onClick={handleCloseNav}
          >
            <IoClose className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
