"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <nav className="p-5 flex justify-between items-center">
        <Link href="/">
          <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-transparent bg-clip-text">
            Foodie App
          </div>
        </Link>
        <ul className="flex items-center gap-20 text-xl">
          <li
            className={`hover:text-orange-500 transition ${
              pathname === "/" ? "text-orange-500" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hover:text-orange-500 transition ${
              pathname === "/about" ? "text-orange-500" : ""
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`hover:text-orange-500 transition ${
              pathname === "/favourites" ? "text-orange-500" : ""
            }`}
          >
            <Link href="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
