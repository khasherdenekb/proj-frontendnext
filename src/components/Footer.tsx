import { siteConfig } from "@/config/site";
import { BookType } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="body-font">
      <div className="mx-auto flex flex-col items-center py-5 sm:flex-row">
        <div className="flex">
          <BookType />
          <span className="ml-3 text-xl">BlogX</span>
        </div>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          © 2023 BlogX —
          <Link
            href="https://instagram.com/khasherdeneld"
            className="ml-1 text-gray-600"
            target="_blank"
          >
            @khasherdene.kb
          </Link>
        </p>
        <span className="sm:justify-star mt-4 flex justify-center gap-3 text-gray-500 sm:ml-auto sm:mt-0">
          {siteConfig.links.map((link) => (
            <Link key={link.url} target="_blank" href={link.url}>
              {link.icon}
            </Link>
          ))}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
