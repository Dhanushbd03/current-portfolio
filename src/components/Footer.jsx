import React from "react";

const Footer = () => {
  return (
    <footer className="m-4 rounded-lg bg-light shadow dark:bg-dark border-dark border-2 dark:border-light lg:ml-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-dark dark:text-light sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
           Made with ❤️ 
          </a>
          
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-dark dark:text-light sm:mt-0">
          <li>
            <a href="#about" className="me-4 hover:underline md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="me-4 hover:underline md:me-6">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="me-4 hover:underline md:me-6">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
