import Section from "./Section";

const schools = [
  {
    time: "2021 – Present",
    name: "Srinivas University Institute of Engineering and Technology",
    detail: "Computer Science and Engineering — Avg CGPA: 8.88",
  },
  {
    time: "2019 – 2021",
    name: "Sri B G S Science & Commerce P U College",
    detail: "PUC — Percentage: 93%",
  },
  {
    time: "2018 – 2019",
    name: "Ganapathy High School",
    detail: "SSLC — Percentage: 91.82%",
  },
];

const Education = () => {
  return (
    <div className="mx-auto max-w-page px-5 sm:px-6">
      <Section id="education" title="Education">
        <ol className="space-y-10">
          {schools.map((school) => (
            <li
              key={school.name}
              className="grid gap-2 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-12"
            >
              <time className="text-sm text-mute">{school.time}</time>
              <div>
                <h3 className="text-lg font-medium text-ink">{school.name}</h3>
                <p className="mt-2 text-base text-mute">{school.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
};

export default Education;
