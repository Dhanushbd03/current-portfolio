import { FaPlay } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const roles = [
	{
		title: "Full Stack Developer",
		org: "Kakunje Software Private Limited",
		when: "JUN 2024 – AUG 2024",
		dot: "bg-arcade",
		points: [
			"Served as a Full Stack Developer on live projects for over 2 months.",
			"Gained hands-on experience in frontend and backend development and database management.",
			"Built responsive web applications across the stack.",
		],
	},
	{
		title: "Content Writer",
		org: "College Website",
		when: "3 MONTHS",
		dot: "bg-royal",
		points: [
			"Boosted the college website's organic traffic by 20% through targeted SEO.",
			"Optimized content using Google Analytics and keyword research.",
			"Collaborated with faculty to make academic information accessible.",
		],
	},
];

const Experience = () => {
	return (
		<div id="experience">
			<SectionHeading
				compact
				kicker="[ Quest Log // Experience ]"
				title="TRACK RECORD"
				text="Production missions, software internships, and technical documentation."
			/>
			<div className="relative space-y-4 border-l-2 border-dotted border-line pl-6">
				{roles.map((role) => (
					<article key={role.title} className="relative">
						<span
							className={`absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full ring-4 ring-cream ${role.dot}`}
						/>
						<div className="hud-card p-5">
							<div className="flex flex-wrap items-start justify-between gap-3">
								<h3 className="font-display text-xl font-bold tracking-tight">
									{role.title}
								</h3>
								<span className="rounded-full border border-line bg-cream px-2.5 py-1 text-[10px] font-bold tracking-[0.12em]">
									{role.when}
								</span>
							</div>
							<p className="mt-1 text-[11px] font-semibold tracking-[0.16em] text-muted">
								{role.org.toUpperCase()}
							</p>
							<ul className="mt-4 space-y-2.5">
								{role.points.map((point) => (
									<li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink/90">
										<FaPlay className="mt-1 h-2 w-2 shrink-0 text-royal" />
										<span>{point}</span>
									</li>
								))}
							</ul>
						</div>
					</article>
				))}
			</div>
		</div>
	);
};

export default Experience;
