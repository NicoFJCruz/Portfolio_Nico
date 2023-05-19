import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

  const handleClickNavbar = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`${styles.paddingX} fixed flex w-full items-center py-5 top-0 z-20 bg-black`}
    >
      <div className="flex justify-between flex items-center mas-w7xl mx-auto w-full">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={handleClickNavbar}
        >
          <img className="w-10 h-10 object-contain rounded" src={logo} alt="logo" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Nicolás Cruz &nbsp; 
            <span className="sm:block hidden">| FullStack Developer </span>
          </p>
        </Link>
        <ul className="list-none sm:flex flex-row gap-10">
          {navLinks.map((nav) => {
            return (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}> {nav.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
