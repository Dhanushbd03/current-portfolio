import Section from "./Section";

const roles = [
  {
    title: "Full Stack Developer",
    place: "Kakunje Software Private Limited",
    time: "Jun 2024 – Aug 2024",
    summary:
      "Serving as a Full Stack Developer on live projects for over 2 Months, gaining hands-on experience in frontend and backend development, database management, and building responsive web applications.",
  },
  {
    title: "Content Writer",
    place: "College Website",
    time: "3 Months",
    summary:
      "Boosted college website's organic traffic by 20% through targeted SEO. Optimized content using Google Analytics and keyword research. Collaborated with faculty to make academic info accessible.",
  },
];

const Experience = () => {
  return (
    <div className="mx-auto max-w-page px-5 sm:px-6">
      <Section id="experience" title="Experience">
        <ol className="space-y-12">
          {roles.map((role) => (
            <li
              key={role.title}
              className="grid gap-2 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-12"
            >
              <time className="text-sm text-mute">{role.time}</time>
              <div>
                <h3 className="text-lg font-medium text-ink">{role.title}</h3>
                <p className="mt-1 text-sm text-accent">{role.place}</p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">
                  {role.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
};

export default Experience;
