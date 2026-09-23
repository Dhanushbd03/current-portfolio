import { FaPlay } from "react-icons/fa";
import { experience_roles } from "../data/site";
import SectionHeading from "./SectionHeading";

const roles = experience_roles;

const Experience = () => {
	return (
		<div id="experience">
			<SectionHeading
				compact
				kicker="[ Quest Log // Experience ]"
				title="TRACK RECORD"
				text="Software engineering, internship delivery, and technical documentation."
			/>
			<div className="relative space-y-4 border-l-2 border-dotted border-line pl-6">
				{roles.map((role) => (
					<article key={`${role.title}-${role.when}`} className="relative">
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
