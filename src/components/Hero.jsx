import { FaArrowRight, FaGamepad } from "react-icons/fa";
import Frame from "./Frame";
import { Ghost, Pacman } from "./Marks";
import { profile } from "../data/site";

const trail = [
	{ type: "dot" },
	{ type: "dot", class_name: "max-sm:hidden" },
	{ type: "dot", class_name: "max-md:hidden" },
	{ type: "ghost", color: "#E10600", delay: "0s" },
	{ type: "dot" },
	{ type: "dot", class_name: "max-sm:hidden" },
	{ type: "pellet" },
	{ type: "dot", class_name: "max-md:hidden" },
	{ type: "dot" },
	{ type: "dot", class_name: "max-lg:hidden" },
	{ type: "ghost", color: "#2121DE", delay: "0.35s" },
	{ type: "dot", class_name: "max-sm:hidden" },
	{ type: "dot" },
	{ type: "pacman" },
	{ type: "dot", class_name: "max-md:hidden" },
	{ type: "pellet" },
	{ type: "dot", class_name: "max-sm:hidden" },
	{ type: "ghost", color: "#FF7AB8", delay: "0.7s", class_name: "max-lg:hidden" },
	{ type: "dot", class_name: "max-lg:hidden" },
];

const metrics = [
	{ label: "CORE CLASS", value: "FULL STACK DEV" },
	{ label: "DIFFICULTY", value: "HARDCORE / PRO" },
	{ label: "STACK READY", value: "MERN + SQL + PHP" },
	{ label: "BASE CAMP", value: profile.location },
];

const TrailMark = ({ item }) => {
	if (item.type === "ghost") {
		return (
			<span
				className={`ghost-bob inline-flex shrink-0 ${item.class_name || ""}`}
				style={{ animationDelay: item.delay }}
			>
				<Ghost color={item.color} className="h-7 w-7" />
			</span>
		);
	}

	if (item.type === "pacman") {
		return <Pacman className={`h-7 w-7 shrink-0 ${item.class_name || ""}`} />;
	}

	if (item.type === "pellet") {
		return (
			<span
				className={`pellet-glow inline-block h-3.5 w-3.5 shrink-0 rounded-full bg-arcade ${item.class_name || ""}`}
			/>
		);
	}

	return (
		<span
			className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#A9A297] dark:bg-[#8d879c] ${item.class_name || ""}`}
		/>
	);
};

const Hero = () => {
	return (
		<section id="about" className="scroll-mt-28 pb-8 pt-6">
			<Frame>
				<div
					className="flex h-14 items-center gap-3 overflow-hidden rounded-full border border-line bg-card px-1.5 shadow-sm"
					aria-hidden="true"
				>
					<div className="grid h-11 shrink-0 place-items-center rounded-full bg-[#F6E7A1] px-3 text-center text-[10px] font-extrabold leading-tight tracking-wide text-[#1a1400]">
						<span>
							1P
							<br />
							INSERTED
						</span>
					</div>
					<p className="hidden shrink-0 text-[10px] font-semibold uppercase leading-tight tracking-[0.18em] text-muted sm:block">
						Telemetry
						<br />
						Running
					</p>
					<div className="flex min-w-0 flex-1 items-center justify-between gap-1 overflow-hidden px-1">
						{trail.map((item, index) => (
							<TrailMark key={`${item.type}-${index}`} item={item} />
						))}
					</div>
					<div className="hidden shrink-0 items-center gap-4 pr-3 text-[10px] font-bold tracking-[0.16em] md:flex">
						<span className="inline-flex items-center gap-1.5">
							<span className="h-2 w-2 rounded-full bg-arcade" />1 LIVES
						</span>
						<span className="text-royal">XP 99999</span>
					</div>
				</div>

				<div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.82fr)] lg:gap-10">
					<div>
						<p className="kicker">[ Player 01 · Full Stack Developer ]</p>
						<h1 className="mt-4 font-display text-[2.7rem] font-bold leading-[0.92] tracking-tight text-ink sm:text-6xl lg:whitespace-nowrap lg:text-[4.15rem] xl:text-[4.4rem]">
							DHANUSH B D
						</h1>
						<p className="mt-5 max-w-xl font-display text-xl font-medium leading-snug text-royal sm:text-[1.7rem]">
							Crafting reactive web apps & solving real-world challenges with
							playful precision.
						</p>
						<p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
							Full Stack Developer passionate about creating innovative web
							applications and tackling real-world challenges. With hands-on
							experience in both front-end and back-end development, I excel in
							building responsive, user-friendly solutions. My focus is on
							delivering high-quality, efficient results that meet the unique
							needs of each project. I blend creativity with technical
							expertise to craft intuitive and engaging web solutions.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<a
								href="#projects"
								className="inline-flex items-center justify-center gap-2 rounded-xl bg-arcade px-5 py-3 text-sm font-bold tracking-wide text-[#1a1400] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
							>
								<FaGamepad className="h-4 w-4" />
								VIEW PROJECTS
							</a>
							<a
								href="#contact"
								className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-card px-5 py-3 text-sm font-bold tracking-wide text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
							>
								GET IN TOUCH
								<FaArrowRight className="h-3.5 w-3.5" />
							</a>
						</div>
					</div>

					<aside className="lg:pt-8">
						<div className="hud-card p-5 sm:p-6">
							<div className="flex items-center justify-between gap-3">
								<p className="text-[11px] font-bold tracking-[0.18em] text-muted">
									PLAYER METRICS
								</p>
								<span className="rounded-full border border-line bg-cream px-2.5 py-1 text-[10px] font-bold tracking-[0.14em]">
									LVL 24
								</span>
							</div>
							<dl className="mt-2">
								{metrics.map((row) => (
									<div
										key={row.label}
										className="flex items-center justify-between gap-4 border-b border-line py-3 last:border-b-0"
									>
										<dt className="text-[11px] font-semibold tracking-[0.16em] text-muted">
											{row.label}
										</dt>
										<dd className="text-right text-xs font-bold tracking-wide sm:text-sm">
											{row.value}
										</dd>
									</div>
								))}
							</dl>
							<div className="mt-4">
								<div className="mb-2 flex items-center justify-between text-[11px] font-bold tracking-[0.16em]">
									<span className="text-muted">XP PROGRESS</span>
									<span>94.8%</span>
								</div>
								<div className="h-2 overflow-hidden rounded-full bg-ink/10">
									<div className="h-full w-[94.8%] rounded-full bg-gradient-to-r from-arcade to-[#FF9F1C]" />
								</div>
							</div>
						</div>
						<div className="mt-3 flex items-center gap-3 rounded-2xl bg-arcade px-4 py-3 text-[#1a1400]">
							<span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1a1400] text-[10px] font-black tracking-wide text-arcade">
								1P
							</span>
							<p className="text-xs font-semibold leading-snug">
								<span className="mb-0.5 block text-[11px] font-bold tracking-[0.14em]">
									READY FOR HIRE
								</span>
								Full-time roles, contract work, and engineering collaborations.
							</p>
						</div>
					</aside>
				</div>
			</Frame>
		</section>
	);
};

export default Hero;
