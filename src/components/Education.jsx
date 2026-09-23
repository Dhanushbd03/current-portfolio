import SectionHeading from "./SectionHeading";

const schools = [
	{
		label: "B.TECH IN CSE",
		school: "Srinivas University Institute of Engineering and Technology",
		when: "2021 – PRESENT",
		detail: "Computer Science and Engineering · Avg CGPA 8.88",
		dot: "bg-arcade",
	},
	{
		label: "PRE-UNIVERSITY (PUC)",
		school: "Sri B G S Science & Commerce P U College",
		when: "2019 – 2021",
		detail: "PUC · Percentage 93%",
		dot: "bg-royal",
	},
	{
		label: "SECONDARY SCHOOL",
		school: "Ganapathy High School",
		when: "2018 – 2019",
		detail: "SSLC · Percentage 91.82%",
		dot: "bg-pinky",
	},
];

const Education = () => {
	return (
		<div id="education">
			<SectionHeading
				compact
				kicker="[ Tutorial Completed // Academics ]"
				title="EDUCATION"
				text="Academic milestones, theoretical rigor, and recorded scores."
			/>
			<div className="relative space-y-4 border-l-2 border-dotted border-line pl-6">
				{schools.map((school) => (
					<article key={school.school} className="relative">
						<span
							className={`absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full ring-4 ring-cream ${school.dot}`}
						/>
						<div className="hud-card p-5">
							<div className="flex flex-wrap items-start justify-between gap-3">
								<p className="text-[11px] font-bold tracking-[0.16em] text-royal">
									{school.label}
								</p>
								<span className="rounded-full border border-line bg-cream px-2.5 py-1 text-[10px] font-bold tracking-[0.12em]">
									{school.when}
								</span>
							</div>
							<h3 className="mt-2 font-display text-xl font-bold leading-tight tracking-tight">
								{school.school}
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-muted">
								{school.detail}
							</p>
						</div>
					</article>
				))}
			</div>
		</div>
	);
};

export default Education;
