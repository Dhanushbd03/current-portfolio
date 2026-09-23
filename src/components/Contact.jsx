import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Frame from "./Frame";
import { profile } from "../data/site";

const Contact = () => {
	const [copied, set_copied] = useState(false);

	const copy_email = async () => {
		try {
			await navigator.clipboard.writeText(profile.email);
			set_copied(true);
			window.setTimeout(() => set_copied(false), 1600);
		} catch {
			window.location.href = `mailto:${profile.email}`;
		}
	};

	const channels = [
		{
			kicker: "DIRECT DISPATCH",
			label: profile.email,
			href: `mailto:${profile.email}`,
			icon: HiOutlineMail,
			action: "copy",
		},
		{
			kicker: "NETWORK LINK",
			label: profile.linkedin_label,
			href: profile.linkedin_url,
			icon: FaLinkedin,
			action: "open",
		},
		{
			kicker: "SOURCE DEPOT",
			label: profile.github_label,
			href: profile.github_url,
			icon: FaGithub,
			action: "open",
		},
	];

	return (
		<section id="contact" className="scroll-mt-28 bg-stage py-16 sm:py-20">
			<Frame>
				<div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.7fr)]">
					<div>
						<div className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5">
							<span className="h-2.5 w-2.5 rounded-full bg-arcade" />
							<p className="text-[10px] font-bold tracking-[0.16em] text-ink sm:text-[11px]">
								STAGE CLEAR! YOU REACHED THE FINAL BOSS
							</p>
						</div>
						<h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
							LET’S BUILD SOMETHING EPIC TOGETHER.
						</h2>
						<p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
							Open for full-stack opportunities, scalable web application
							builds, contract work, and engineering collaborations. If you
							have questions about my expertise or suggestions for improvement,
							I’d be happy to connect.
						</p>
						<div className="mt-8 space-y-3">
							{channels.map((channel) => {
								const Icon = channel.icon;
								return (
									<div
										key={channel.kicker}
										className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-card px-4 py-3"
									>
										<div className="min-w-0">
											<p className="text-[10px] font-bold tracking-[0.18em] text-muted">
												{channel.kicker}
											</p>
											<a
												href={channel.href}
												target={channel.action === "open" ? "_blank" : undefined}
												rel={channel.action === "open" ? "noreferrer" : undefined}
												className="mt-0.5 block truncate text-sm font-semibold text-royal sm:text-base"
											>
												{channel.label}
											</a>
										</div>
										{channel.action === "copy" ? (
											<button
												type="button"
												onClick={copy_email}
												className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] transition ${
													copied
														? "bg-arcade text-[#1a1400]"
														: "border border-line hover:bg-cream"
												}`}
											>
												{copied ? "COPIED" : "COPY"}
											</button>
										) : (
											<a
												href={channel.href}
												target="_blank"
												rel="noreferrer"
												aria-label={channel.kicker}
												className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink transition hover:bg-cream"
											>
												<Icon className="h-4 w-4" />
											</a>
										)}
									</div>
								);
							})}
						</div>
					</div>

					<aside className="hud-card p-6">
						<p className="text-[11px] font-bold tracking-[0.18em] text-muted">
							COIN SLOT // PRESS
						</p>
						<p className="mt-3 text-sm leading-relaxed text-muted">
							Ready to initiate a mission? Send a note through email, or pull
							the network links directly.
						</p>
						<a
							href={`mailto:${profile.email}`}
							className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-arcade px-5 py-3.5 text-sm font-bold tracking-[0.12em] text-[#1a1400] transition hover:brightness-95"
						>
							<span className="text-xs">▶</span>
							SEND TRANSMISSION
						</a>
						<p className="mt-4 flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] text-muted">
							<span className="h-2 w-2 rounded-full bg-royal" />
							ESTIMATED RESPONSE · PERSONAL
						</p>
					</aside>
				</div>
			</Frame>
		</section>
	);
};

export default Contact;
