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
    <header className="px-4 py-3 bg-white flex justify-between items-center">
      <div className="text-primary text-2xl italic font-bold">Passlock</div>
      <nav
        className={`max-sm:absolute top-14 bottom-0 right-0 ${
          navIsOpen ? "max-sm:translate-x-0" : "max-sm:translate-x-full"
        } max-sm:bg-white max-sm:shadow-lg max-sm:left-2/4 max-sm:py-5 transition
      `}
      >
        <ul className="flex gap-4 items-center md:gap-x-8 max-sm:flex-col max-sm:mt-5">
          {navList.map((item) => (
            <li className="relative group">
              <Link
                href={item.href}
                className="max-sm:hover:text-accent transition"
              >
                {item.title}
              </Link>
              <span className="w-0 h-1 bg-accent absolute -bottom-4 left-1/2 right-0 -translate-x-1/2 group-hover:w-full transition-all duration-300 max-sm:hidden"></span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-x-4">
        <LoginButton />
        <div className="relative sm:hidden w-7 h-7">
          <button
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition ${
              navIsOpen ? "scale-0" : ""
            }`}
            onClick={handleOpenNav}
          >
            <RiMenu3Line className="w-6 h-6" />
          </button>
          <button
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition ${
              navIsOpen ? "" : "scale-0"
            }`}
            onClick={handleCloseNav}
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
