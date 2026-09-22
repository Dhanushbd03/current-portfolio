import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaGitSquare,
  FaGithub,
} from "react-icons/fa";
import { SiRedux, SiExpress, SiPhp, SiAppwrite, SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbApi, TbBrandCpp } from "react-icons/tb";
import { DiDjango } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import Section from "./Section";

const skill_groups = [
  {
    name: "Frontend",
    items: [
      { label: "HTML", Icon: FaHtml5 },
      { label: "CSS", Icon: FaCss3 },
      { label: "JavaScript", Icon: FaJs },
      { label: "Tailwind CSS", Icon: RiTailwindCssFill },
      { label: "React", Icon: RiReactjsFill },
      { label: "Redux", Icon: SiRedux },
    ],
  },
  {
    name: "Backend",
    items: [
      { label: "Node.js", Icon: FaNodeJs },
      { label: "Express", Icon: SiExpress },
      { label: "PostgreSQL", Icon: BiLogoPostgresql },
      { label: "APIs", Icon: TbApi },
      { label: "PHP", Icon: SiPhp },
      { label: "Django", Icon: DiDjango },
    ],
  },
  {
    name: "Others",
    items: [
      { label: "Git", Icon: FaGitSquare },
      { label: "GitHub", Icon: FaGithub },
      { label: "C++", Icon: TbBrandCpp },
      { label: "Appwrite", Icon: SiAppwrite },
      { label: "Bootstrap", Icon: BsBootstrapFill },
      { label: "MySQL", Icon: SiMysql },
    ],
  },
];

const Skills = () => {
  return (
    <div className="mx-auto max-w-page px-5 sm:px-6">
      <Section id="skills" title="Skills">
        <div className="space-y-12">
          {skill_groups.map((group) => (
            <div key={group.name}>
              <h3 className="text-sm font-medium tracking-wide text-mute">
                {group.name}
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.items.map(({ label, Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-3 text-sm text-ink"
                  >
                    <Icon
                      className="size-5 shrink-0 text-ink"
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Skills;
