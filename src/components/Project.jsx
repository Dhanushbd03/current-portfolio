import projects from "../assets/project.json";
import Section from "./Section";

const Project = () => {
  const project_list = projects.content;

  return (
    <div className="mx-auto max-w-page px-5 sm:px-6">
      <Section id="projects" title="Projects">
        <ul className="grid gap-8 md:grid-cols-2">
          {project_list.map((project) => (
            <li
              key={project.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors hover:border-accent/40"
            >
              <div className="aspect-video overflow-hidden bg-line">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-medium text-ink">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  {project.description}
                </p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex text-sm text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    View project
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default Project;
