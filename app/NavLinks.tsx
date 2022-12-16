"use client";

import { use } from "react";
import { categories } from "./constants";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm pb-10 gap-4 max-w-6xl mx-auto border-b">
      {categories.map((category) => (
        <NavLink
          category={category}
          key={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
};

export default NavLinks;
