import React from "react";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { FaHtml5, FaCss3, FaJs , FaNodeJs,FaGitSquare,FaGithub } from "react-icons/fa";
import { SiRedux ,SiExpress,SiPhp,SiAppwrite,SiMysql} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import {TbApi,TbBrandCpp} from "react-icons/tb";
import {DiDjango} from "react-icons/di";
import {BsBootstrapFill} from "react-icons/bs";

const Skills = () => {
    const iconClass = "text-5xl text-dark dark:text-light hover:scale-150";
    const skills = {
      frontend: [FaHtml5, FaCss3, FaJs, RiTailwindCssFill, RiReactjsFill, SiRedux],
        backend: [FaNodeJs,SiExpress,BiLogoPostgresql,TbApi,SiPhp,DiDjango],
        others : [FaGitSquare,FaGithub,TbBrandCpp,SiAppwrite,BsBootstrapFill,SiMysql],
    };
  
    return (
      <div id="skills" className="pb-16">
        <h2 className="mb-5 text-3xl font-bold text-dark dark:text-light lg:ml-10">Skills</h2>
        {Object.keys(skills).map((category) => (
          <div key={category} className="py-5">
            <div className="flex justify-evenly">
              {skills[category].map((Icon, index) => (
                <Icon key={index} className={iconClass} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default Skills;
