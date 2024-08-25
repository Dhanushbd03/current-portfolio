import React from "react";
import { CgWebsite } from "react-icons/cg";
import { MdDeveloperMode } from "react-icons/md";

const Experience = () => {
  return (
    <>
      <h2 className="mb-5 text-3xl font-bold text-dark dark:text-light lg:ml-10 " id="experience">
        Experience
      </h2>

      <ol className="items-center sm:flex lg:ml-10 py-10 pb-20 ">
        <li className="relative mb-6 sm:mb-0 flex-grow">
          <div className="flex items-center">
            <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-light ring-0 ring-dark  sm:ring-8">
            <MdDeveloperMode />

            </div>
            <div className="hidden h-0.5 w-full bg-dark dark:bg-light sm:flex"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-dark dark:text-light">
            FULL STACK DEVELOPER - Kakunje Software Private Limited
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-anchor ">
              JUN 2024 - AUG 2024
            </time>
            <p className="text-base font-normal text-dark dark:text-light text-pretty text-justify">
            Serving as a Full Stack Developer on live projects for over 2 Months, gaining hands-on experience in
            frontend and backend development, database management, and building responsive web applications..
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0 flex-grow">
          <div className="flex items-center">
            <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-light ring-0 ring-dark  sm:ring-8">
            <CgWebsite />
            </div>
            <div className="hidden h-0.5 w-full bg-dark dark:bg-light sm:flex"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-dark dark:text-light">
             CONTENT WRITER - College Website
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-anchor ">
              3 Months
            </time>
            <p className="text-base font-normal text-dark dark:text-light text-pretty text-justify">
            Boosted college website's organic traffic by 20% through targeted SEO. Optimized content using Google
            Analytics and keyword research. Collaborated with faculty to make academic info accessible.
            </p>
          </div>
        </li>

      </ol>
    </>
  );
};

export default Experience;
