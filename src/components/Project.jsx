import { FaArrowRight } from "react-icons/fa";
import projects from "../assets/project.json";
import Frame from "./Frame";
import SectionHeading from "./SectionHeading";

const quest_meta = {
	"Mind Mingle": {
		code: "QUEST 01 // PLATFORM",
		status: "ACTIVE BUILD",
		stack: "REACT + APPWRITE",
		span: "lg:col-span-4",
		fit: "object-top",
	},
	Chess: {
		code: "QUEST 02 // MULTIPLAYER",
		status: "REAL-TIME",
		stack: "REACT + WEBSOCKET",
		span: "lg:col-span-2",
		fit: "object-center",
	},
	"Keeper App": {
		code: "QUEST 03 // NOTES",
		status: "UI BUILD",
		stack: "REACT",
		span: "lg:col-span-2",
		fit: "object-top",
	},
	"Gyaan Yug": {
		code: "QUEST 04 // HACKATHON",
		status: "24H SPRINT",
		stack: "NODE + MONGODB",
		span: "lg:col-span-2",
		fit: "object-top",
	},
	"E-Commerce Website": {
		code: "QUEST 05 // STOREFRONT",
		status: "FULL STACK",
		stack: "PHP + TAILWIND",
		span: "lg:col-span-2",
		fit: "object-top",
	},
};

const usable_link = (link) => {
	if (!link) return "";
	if (link.includes("example.com")) return "";
	return link;
};

const Project = () => {
	const quests = projects.content;

	return (
		<section id="projects" className="scroll-mt-28 py-16 sm:py-20">
			<Frame>
				<SectionHeading
					kicker="[ World 01 // Selected Quests ]"
					title="FEATURED PROJECTS"
					text="Bento grid of featured full-stack software and interactive builds."
					meta={`${quests.length} QUEST CARDS LOADED`}
				/>
				<div className="grid gap-4 lg:grid-cols-6">
					{quests.map((quest) => {
						const meta = quest_meta[quest.name] || {
							code: "QUEST // BUILD",
							status: "BUILD",
							stack: "FULL STACK",
							span: "lg:col-span-2",
							fit: "object-top",
						};
						const href = usable_link(quest.link);

						return (
							<article
								key={quest.name}
								className={`hud-card flex h-full flex-col overflow-hidden ${meta.span}`}
							>
								<div className="flex items-center justify-between gap-3 bg-royal/[0.06] px-4 py-2.5">
									<p className="text-[10px] font-bold tracking-[0.16em] text-royal sm:text-[11px]">
										[ {meta.code} ]
									</p>
									<p className="shrink-0 text-[10px] font-bold tracking-[0.16em] text-royal">
										{meta.status}
									</p>
								</div>
								<div className="flex flex-1 flex-col p-5">
									<h3 className="font-display text-2xl font-bold tracking-tight">
										{quest.name}
									</h3>
									<p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-royal">
										{meta.stack}
									</p>
									<p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted">
										{quest.description}
									</p>
									{href ? (
										<a
											href={href}
											target="_blank"
											rel="noreferrer"
											className="mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-ink transition hover:text-royal"
										>
											VIEW CODE
											<FaArrowRight className="h-3 w-3" />
										</a>
									) : null}
									<div className="mt-auto pt-4">
										<img
											src={quest.image}
											alt={`${quest.name} preview`}
											loading="lazy"
											className={`h-36 w-full rounded-2xl border border-line object-cover ${meta.fit}`}
										/>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</Frame>
		</section>
	);
};

export default Project;
