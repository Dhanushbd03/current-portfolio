import React from "react";

const Education = () => {
  return (<>
    <h2 className="mb-5 text-3xl font-bold text-dark dark:text-light lg:ml-10">Education</h2>

    <ol className="relative border-s border-dark dark:border-light lg:ml-10">
      <li className="mb-10 ms-4">
        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-dark bg-light dark:border-light dark:bg-dark"></div>
        <time className="mb-1 text-sm font-normal leading-none text-dark dark:text-light">
          2021 - Present
        </time>
        <h3 className="text-lg font-semibold text-dark dark:text-light">
          Srinivas University Institute of Engineering and Technology
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Computer Science and Engineering - Avg CGPA : 8.88{" "}
        </p>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-dark bg-light dark:border-light dark:bg-dark"></div>
        <time className="mb-1 text-sm font-normal leading-none text-dark dark:text-light">
          2019 - 2021
        </time>
        <h3 className="text-lg font-semibold text-dark dark:text-light">
          Sri B G S Science & Commerce P U College
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          PUC - Percentage : 93%{" "}
        </p>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-dark bg-light dark:border-light dark:bg-dark"></div>
        <time className="mb-1 text-sm font-normal leading-none text-dark dark:text-light">
          2018 - 2019{" "}
        </time>
        <h3 className="text-lg font-semibold text-dark dark:text-light">
          Ganapathy High School
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          SSLC - Percentage : 91.82%{" "}
        </p>
      </li>
    </ol>
    </>
  );
};

export default Education;
