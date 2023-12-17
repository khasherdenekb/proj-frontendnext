import { Code, Github, Linkedin, TreeDeciduousIcon } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Khash-Erdene 'B",
  description: "Software engineer & developer | fullstack | web | mobile",
  image: "",
  navItems: [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Blog",
      to: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blogs",
      href: "blogs",
    },
    {
      label: "Search blog",
      href: "find",
    },
  ],
  links: [
    { url: "https://github.com/khasherdenekb", icon: <Github /> },
    { url: "https://www.linkedin.com/in/khasherdenekb", icon: <Linkedin /> },
    { url: "https://leetcode.com/khasherdenekb", icon: <Code /> },
    { url: "https://linktr.ee/khasherdene", icon: <TreeDeciduousIcon /> },
  ],
};
