import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="flex flex-col pt-5" id="contact">
      <h2 className="mb-5 text-3xl font-bold text-dark dark:text-light lg:ml-10">
        Contact Me
      </h2>
      <div className="flex border-collapse flex-col items-center justify-center border-x-2 border-b-2 border-dark py-5 dark:border-light lg:ml-10">
        <h1 className="text-center text-5xl text-dark dark:text-light">
          Looking Forward to Your Thoughts
        </h1>
        <p className="text-center text-xl text-anchor">
          If you have questions about my expertise or suggestions for
          improvement, I'd be happy to connect.
        </p>
      </div>
      <div className="flex border-collapse flex-col md:flex-row items-center justify-center border-x-2 border-b-2 border-dark dark:border-light lg:ml-10">
        <div
          className="flex h-32 md:w-1/3 w-full  border-collapse cursor-pointer flex-col items-center justify-center border-x-2 border-b-2 border-dark text-dark hover:bg-amber-600 hover:text-dark dark:border-light dark:text-light"
          onClick={() =>
            window.open("https://www.linkedin.com/in/dhanushbd03", "_blank")
          }
        >
          <h1 className="text-xl">
            <FaLinkedin />
          </h1>
          <p>linkedin.com/in/dhanushbd03</p>
        </div>
        <div
          className="flex h-32 md:w-1/3 w-full  border-collapse cursor-pointer flex-col items-center justify-center border-x-2 border-b-2 border-dark text-dark hover:bg-rose-600 dark:border-light dark:text-light"
          onClick={() => {
            window.open("mailto:bddhanush03@gmail.com", "_blank");
          }}
        >
          <h1 className="text-xl">
            <SiGmail />
          </h1>
          <p>bddhanush03@gmail.com</p>
        </div>
        <div
          className="flex h-32 md:w-1/3 w-full  border-collapse cursor-pointer flex-col items-center justify-center border-x-2 border-b-2 border-dark text-dark hover:bg-lime-700 dark:border-light dark:text-light"
          onClick={() =>
            window.open("https://github.com/Dhanushbd03", "_blank")
          }
        >
          <h1 className="text-xl">
            <FaGithub />
          </h1>
          <p>github.com/Dhanushbd03</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
