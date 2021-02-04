import { useState, memo } from "react";
import MobileNav from "./MobileNav";
import Burger from "./Burger";

export const navLinks = [
  {
    href: "/",
    name: "Shortly",
  },
  {
    href: "/",
    name: "Features",
  },
  {
    href: "/",
    name: "Pricing",
  },
  {
    href: "/",
    name: "Resources",
  },
];

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="pt-6 relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
      <div className="hidden sm:flex items-center space-x-8">
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={
              item.name === "Shortly"
                ? "text-indigo-200 text-lg font-bold hover:text-gray-200"
                : "text-white text-base font-medium hover:text-gray-200"
            }
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden sm:flex items-center space-x-8">
        <a
          href="/"
          className="text-white text-base font-medium hover:text-gray-200"
        >
          Log in
        </a>
        <a
          href="/"
          className="text-white inline-flex items-center px-4 py-2 border border-transparent text-base font-medium hover:text-gray-200 bg-gray-600 rounded-md"
        >
          Sign up
        </a>
      </div>
      <Burger active={active} setActive={setActive} />
      {active && <MobileNav active={active} setActive={setActive} />}
    </nav>
  );
};

export default memo(Nav);
