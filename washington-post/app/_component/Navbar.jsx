"use client";

import { Menu } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import menuItems from "@/lib/menuItems";

function Navbar() {
  const [active, setActive] = useState(null);
  const subcategoriesRef = useRef(null);

  const myLinks = [
    { id: 0, title: "News" },
    { id: 1, title: "Magazine" },
    { id: 2, title: "Sport" },
    { id: 3, title: "Culture" },
    { id: 4, title: "Lifestyle" },
  ];

  const activator = (id) => {
    setActive(id);
  };
  const links = myLinks.map((e) => (
    <li
      onClick={() => activator(e.id)}
      key={e.id}
      className={`cursor-pointer ${
        active === e.id ? "text-orange-500 font-bold" : null
      }`}
    >
      {e.title}
    </li>
  ));
  const handleClickOutside = (event) => {
    if (
      subcategoriesRef.current &&
      !subcategoriesRef.current.contains(event.target)
    ) {
      setActive(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const subLinks = menuItems[active]?.items;

  const liItems = subLinks?.map((e) => (
    <li className="text-sm font-medium hover:text-orange-600 cursor-pointer">
      {e}
    </li>
  ));
  return (
    <nav className="relative border-t-2 border-b-2 border-gray-300 w-[94%] mx-auto py-3 mt-14 flex items-center justify-between">
      <span className="flex items-center gap-5 text-xs md:text-sm font-semibold cursor-pointer">
        <Menu /> <span className="hidden md:block text-sm">More sections</span>
      </span>

      <ul className="flex items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 text-xs sm:text-sm font-medium ">
        {links}
      </ul>

      <div></div>

      <div
        ref={subcategoriesRef}
        className={` w-[410px] sm:w-[610px] md:w-[710px] lg:right-40 h-auto absolute top-16 right-1  bg-white ${
          active === null ? "hidden" : "block"
        }`}
      >
        <ul className="subcategories grid grid-cols-4 grid-rows-3 gap-4 p-4">
          {liItems}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
