import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  const headerList = [
    {
      id: 1,
      name: "Home",
      navPlace: "#",
    },
    {
      id: 2,
      name: "About",
      navPlace: "#about",
    },
    {
      id: 3,
      name: "Projects",
      navPlace: "#project",
    },
    {
      id: 4,
      name: "Resume",
      navPlace: "#resume",
    },
    {
      id: 5,
      name: "Contact",
      navPlace: "#contact",
    },
  ];

  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header
      className="flex justify-between px-10 w-full text-center shadow-2xl bg-gray-800 p-4 shadow-md sticky top-0 z-10"
      id="header"
    >
      <div className="flex">
        <div className="text-white text-4xl font-bold">Kumaravel T</div>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-end gap-10">
          {headerList.map((item) => (
            <li className="header-li text-white" key={item.id}>
              <a href={item.navPlace}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {toggleNav && (
        <div className="block md:hidden mobile-nav">
          <ul className="flex flex-col">
            {headerList.map((item) => (
              <li className="border-nav" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={() => setToggleNav(!toggleNav)}
        className="block md:hidden"
      >
        <Bars3Icon className="h-6" />
      </button>
    </header>
  );
}
