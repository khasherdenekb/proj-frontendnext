"use client";
import { BookType, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ModeToggle } from "./ThemeChanger";
import MobileMenu from "./Navbar/MobileMenu";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" body-font">
      <div className="mx-auto flex flex-wrap items-center justify-between py-5">
        <Link href="/" className="title-font  flex items-center  font-medium">
          <BookType />
          <span className="ml-3 text-xl">BlogX</span>
        </Link>
        <div className="hidden flex-wrap items-center justify-center gap-4 text-base	 md:ml-4 md:mr-auto md:border-l md:border-gray-400 md:py-1 md:pl-4 lg:flex">
          {siteConfig.navItems.map((link) => (
            <Link
              key={link.label}
              className="cursor-pointer hover:text-gray-400"
              href={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className=" hidden items-center gap-2 lg:flex">
          {/* Search */}
          <div className="flex gap-2">
            <Input className="w-40" />
            <Button className="h-10 w-12">
              <Search />
            </Button>
          </div>
          {/* Dark Mode */}
          <ModeToggle />
        </div>
        {/* Mobile menu */}
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
