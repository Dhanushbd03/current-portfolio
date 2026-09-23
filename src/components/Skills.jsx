import { skill_groups } from "../data/site";
import Frame from "./Frame";
import SectionHeading from "./SectionHeading";

const Skills = () => {
	return (
		<section id="skills" className="scroll-mt-28 py-8 sm:py-12">
			<Frame>
				<SectionHeading
					kicker="[ Inventory // Collectibles ]"
					title="POWER-UP TOOLKIT"
					text="Power pellets for languages, backend services, frontend and mobile, data and AI, and cloud engineering."
				/>
				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
