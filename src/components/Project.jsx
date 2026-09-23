import { FaArrowRight, FaBookOpen, FaChess, FaRobot, FaShoppingBag, FaTaxi, FaUsers } from "react-icons/fa";
import projects from "../assets/project.json";
import Frame from "./Frame";
import SectionHeading from "./SectionHeading";

const span_class = {
	wide: "lg:col-span-4",
	tile: "lg:col-span-2",
};

const visuals = {
	taxi: {
		icon: FaTaxi,
		panel: "from-[#FFF4C2] via-[#FFD600] to-[#FFE08A]",
	},
	hiring: {
		icon: FaUsers,
		panel: "from-[#E4E4FF] via-[#C9CAFF] to-[#FFD600]",
	},
	docs: {
		icon: FaRobot,
		panel: "from-[#FFE3F0] via-[#F6E7A1] to-[#D9DBFF]",
	},
	store: {
		icon: FaShoppingBag,
		panel: "from-[#FFF4C2] via-[#FFE08A] to-[#E4E4FF]",
	},
	chess: {
		icon: FaChess,
		panel: "from-[#F6F3EC] via-[#F6E7A1] to-[#FFD600]",
	},
	learn: {
		icon: FaBookOpen,
		panel: "from-[#F6F3EC] via-[#F6E7A1] to-[#C8CBFF]",
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
					text="Production platforms, AI builds, and interactive apps from the current quest log."
					meta={`${quests.length} QUEST CARDS LOADED`}
				/>
				<div className="grid gap-4 lg:grid-cols-6">
					{quests.map((quest) => {
						const href = usable_link(quest.link);
						const card_span = span_class[quest.span] || span_class.tile;
						const visual = visuals[quest.visual] || visuals.taxi;
						const Icon = visual.icon;

						return (
							<article
								key={quest.name}
								className={`hud-card flex h-full flex-col overflow-hidden ${card_span}`}
							>
								<div className="flex items-center justify-between gap-3 bg-royal/[0.06] px-4 py-2.5">
									<p className="text-[10px] font-bold tracking-[0.16em] text-royal sm:text-[11px]">
										[ {quest.code} ]
									</p>
									<p className="shrink-0 text-[10px] font-bold tracking-[0.16em] text-royal">
										{quest.status}
									</p>
								</div>
								<div className="flex flex-1 flex-col p-5">
									<h3 className="font-display text-2xl font-bold tracking-tight">
										{quest.name}
									</h3>
									{quest.subtitle ? (
										<p className="mt-1 text-sm font-semibold text-ink">
											{quest.subtitle}
										</p>
									) : null}
									<p className="mt-1 text-[11px] font-bold leading-relaxed tracking-[0.12em] text-royal">
										{quest.stack}
									</p>
									<p className="mt-3 text-sm leading-relaxed text-muted">
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
										{quest.image ? (
											<img
												src={quest.image}
												alt={`${quest.name} preview`}
												loading="lazy"
												className="h-36 w-full rounded-2xl border border-line object-cover object-top"
											/>
										) : (
											<div
												className={`grid h-36 w-full place-items-center rounded-2xl border border-line bg-gradient-to-br ${visual.panel}`}
											>
												<div className="grid place-items-center gap-2 text-[#1a1400]">
													<span className="grid h-14 w-14 place-items-center rounded-full border border-[#1a1400]/15 bg-white/50">
														<Icon className="h-6 w-6" />
													</span>
													<span className="text-[10px] font-bold tracking-[0.18em]">
														QUEST HUD
													</span>
												</div>
											</div>
										)}
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
