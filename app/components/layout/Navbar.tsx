"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [navIsOpen, setnavIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <nav className="p-5 flex justify-between items-center">
        <Link href="/">
          <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-transparent bg-clip-text">
            Foodie App
          </div>
        </Link>
        <ul
          className={`flex items-center gap-20 max-md:gap-10 text-xl max-sm:absolute max-sm:left-0 max-sm:right-0 max-sm:flex-col max-sm:top-16 max-sm:bg-white max-sm:py-10 max-sm:z-20 transition origin-top-right ${
            navIsOpen ? "" : "scale-0"
          }`}
        >
          <li
            className={`hover:text-orange-500 transition ${
              pathname === "/" ? "text-orange-500" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hover:text-orange-500 transition ${
              pathname === "/recipes" ? "text-orange-500" : ""
            }`}
          >
            <Link href="/recipes">Recipes</Link>
          </li>
          <li
            className={`hover:text-orange-500 transition ${
              pathname === "/favourites" ? "text-orange-500" : ""
            }`}
          >
            <Link href="/favourites">Favourites</Link>
          </li>
        </ul>
        <div className="sm:hidden">
          <button
            className={`${navIsOpen ? "hidden" : ""}`}
            onClick={() => setnavIsOpen(true)}
          >
            Open
          </button>
          <button
            className={`${navIsOpen ? "" : "hidden"}`}
            onClick={() => setnavIsOpen(false)}
          >
            Close
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
