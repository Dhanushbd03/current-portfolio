import Frame from "./Frame";
import SectionHeading from "./SectionHeading";

const skill_groups = [
	{
		title: "FRONT-END MASTERY",
		buff: "SPEED BOOST",
		buff_value: "+100% RESPONSIVE",
		buff_class: "text-royal",
		items: [
			{ name: "React", tone: "bg-arcade" },
			{ name: "JavaScript", tone: "bg-royal" },
			{ name: "Tailwind", tone: "bg-arcade" },
			{ name: "Redux", tone: "bg-royal" },
			{ name: "HTML5", tone: "bg-ink" },
			{ name: "CSS3", tone: "bg-[#C5C1B8]" },
		],
	},
	{
		title: "BACK-END & SCHEMAS",
		buff: "RELIABILITY",
		buff_value: "SQL CONSTRAINTS",
		buff_class: "text-blinky",
		items: [
			{ name: "Node.js", tone: "bg-arcade" },
			{ name: "Express", tone: "bg-royal" },
			{ name: "PostgreSQL", tone: "bg-royal" },
			{ name: "MySQL", tone: "bg-arcade" },
			{ name: "PHP", tone: "bg-blinky" },
			{ name: "Django", tone: "bg-royal" },
			{ name: "REST APIs", tone: "bg-arcade" },
		],
	},
	{
		title: "TOOLS & ENGINES",
		buff: "VERSATILITY",
		buff_value: "MULTI-STACK",
		buff_class: "text-pinky",
		items: [
			{ name: "Git", tone: "bg-blinky" },
			{ name: "GitHub", tone: "bg-ink" },
			{ name: "C++", tone: "bg-[#8D897F]" },
			{ name: "Appwrite", tone: "bg-blinky" },
			{ name: "Bootstrap", tone: "bg-royal" },
		],
	},
];

const Skills = () => {
	return (
		<section id="skills" className="scroll-mt-28 py-8 sm:py-12">
			<Frame>
				<SectionHeading
					kicker="[ Inventory // Collectibles ]"
					title="POWER-UP TOOLKIT"
					text="Arcade inventory slots with active power pellets, languages, frameworks, and database engines."
				/>
				<div className="grid gap-4 lg:grid-cols-3">
					{skill_groups.map((group) => (
						<article key={group.title} className="hud-card flex flex-col p-5">
							<div className="mb-4 flex items-center justify-between gap-3">
								<h3 className="text-[11px] font-bold tracking-[0.16em]">
									{group.title}
								</h3>
								<span className="rounded-full border border-line bg-cream px-2.5 py-1 text-[10px] font-bold tracking-[0.14em]">
									{group.items.length} ITEMS
								</span>
							</div>
							<div className="flex flex-wrap gap-2">
								{group.items.map((item) => (
									<span
										key={item.name}
										className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5"
									>
										<span className={`h-2.5 w-2.5 rounded-full ${item.tone}`} />
										{item.name}
									</span>
								))}
							</div>
							<div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 text-[10px] font-bold tracking-[0.14em]">
								<span className="text-muted">BUFF STATUS: {group.buff}</span>
								<span className={group.buff_class}>{group.buff_value}</span>
							</div>
						</article>
					))}
				</div>
			</Frame>
		</section>
	);
};

export default Skills;
