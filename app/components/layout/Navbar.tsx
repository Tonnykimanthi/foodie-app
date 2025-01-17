"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// Icons
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [navIsOpen, setnavIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleRouteToFavourites = () => {
    router.push("/recipes/favourites");
  };

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-5">
        <Link href="/">
          <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-3xl font-bold text-transparent max-sm:text-2xl">
            Foodie App
          </div>
        </Link>
        <ul
          className={`flex origin-top-right items-center gap-20 text-xl transition max-md:gap-10 max-sm:absolute max-sm:left-0 max-sm:right-0 max-sm:top-16 max-sm:z-20 max-sm:flex-col max-sm:bg-white max-sm:py-10 ${
            navIsOpen ? "" : "max-sm:scale-0"
          }`}
        >
          <li
            className={`transition hover:text-orange-500 ${
              pathname === "/" ? "text-orange-500" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`transition hover:text-orange-500 ${
              pathname === "/recipes/favourites"
                ? ""
                : pathname.startsWith("/recipes")
                  ? "text-orange-500"
                  : ""
            }`}
          >
            <Link href="/recipes">Recipes</Link>
          </li>
          <li
            className={`transition hover:text-orange-500 ${
              pathname === "/recipes/favourites" ? "text-orange-500" : ""
            }`}
            onClick={handleRouteToFavourites}
          >
            <Link href="recipes/favourites">Favourites</Link>
          </li>
        </ul>
        <div className="grid place-items-center sm:hidden">
          <button
            className={`${navIsOpen ? "hidden" : ""}`}
            onClick={() => setnavIsOpen(true)}
          >
            <IoMenuOutline className="size-8" />
          </button>
          <button
            className={`${navIsOpen ? "" : "hidden"}`}
            onClick={() => setnavIsOpen(false)}
          >
            <IoCloseOutline className="size-8" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
