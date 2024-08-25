import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import projects from "../assets/project.json";

const Project = () => {
  const content = projects.content;
  const [project, setProject] = useState(content[0]);
  return (
    <>
      <h2 className="mb-5 text-3xl font-bold text-dark dark:text-light lg:ml-10 " id="projects">
        Projects
      </h2>
      <div className="pb-20 md:flex lg:ml-10">
        <ul className="flex-column space-y mb-4 space-y-4 text-sm font-medium text-dark dark:text-light md:mb-0 md:me-4">
          {content.map((project, index) => (
            <li key={index}>
              <a
                onClick={() => {
                  setProject(project);
                }}
                className="active inline-flex w-full items-center rounded-lg bg-dark px-4 py-3 text-light dark:bg-light dark:text-dark"
                aria-current="page"
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="shadow-sm shadow-dark dark:shadow-light border border-dark dark:border-light text-medium w-full rounded-lg bg-light p-6 text-dark dark:bg-dark dark:text-light space-y-5">
          <a
            href={project.link}
            target="_blank"
            className="mb-2 inline-flex items-center gap-3 text-lg font-bold text-dark hover:underline hover:scale-110 dark:text-light group"
          >
            {project.name} <FaLocationArrow className="group-hover:-translate-y-1" />
          </a>
          <div className="flex gap-5 ">
            <img src={project.image} alt="" className="h-40" />
            <p className="mb-2 text-pretty text-justify">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
