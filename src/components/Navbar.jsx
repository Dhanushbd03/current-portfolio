import React from "react";
import { FaGithub } from "react-icons/fa";
import DarkToggle from "./DarkToggle";
import { CiHome } from "react-icons/ci";

const Navbar = () => {
	const anchorClass = "cursor-pointer hover:scale-110 transition-all duration-100";
  return (
    <div className="flex justify-between p-2">
      <img
        className={`h-16 w-16 rounded-full border-2 border-dark dark:border-light object-cover ${anchorClass}`}
        src="passport.png"
        alt="Rounded avatar"
      ></img>
      <div
        className="hidden w-full items-center justify-between rounded-full border-2 border-dark px-5 dark:border-light md:order-1 md:flex md:w-auto"
        id="navbar-user"
      >
        <ul className="mt-4 flex flex-col rounded-lg border border-dark bg-dark p-4 font-medium dark:border-light dark:bg-dark md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-light md:p-0 rtl:space-x-reverse">
          <li>
            <a
              href="#about"
              className="block rounded bg-anchor px-3 py-2 text-dark md:bg-transparent md:p-0 md:text-dark md:dark:text-light"
              aria-current="page"
            >
              <CiHome className="size-6" />
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block rounded px-3 py-2 text-dark hover:bg-anchor dark:text-light md:p-0 md:hover:bg-transparent md:hover:text-anchor md:dark:hover:bg-transparent"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="block rounded px-3 py-2 text-dark hover:bg-anchor dark:text-light md:p-0 md:hover:bg-transparent md:hover:text-anchor md:dark:hover:bg-transparent"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block rounded px-3 py-2 text-dark hover:bg-anchor dark:text-light md:p-0 md:hover:bg-transparent md:hover:text-anchor md:dark:hover:bg-transparent"
            >
              
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block rounded px-3 py-2 text-dark hover:bg-anchor dark:text-light md:p-0 md:hover:bg-transparent md:hover:text-anchor md:dark:hover:bg-transparent"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="order-1 flex items-center gap-5">
        <FaGithub
          className="size-8 cursor-pointer text-dark transition-all duration-100 hover:scale-110 hover:text-anchor dark:text-light"
          onClick={() => {
            window.open("https://github.com/Dhanushbd03", "_blank");
          }}
        />
        <DarkToggle className="size-8 cursor-pointer text-dark transition-all duration-100 hover:scale-110 hover:text-anchor dark:text-light" />
      </div>
    </div>
  );
};

export default Navbar;
