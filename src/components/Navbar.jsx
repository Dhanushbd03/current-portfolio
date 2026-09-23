import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import DarkToggle from "./DarkToggle";
import Frame from "./Frame";
import { Pacman } from "./Marks";
import { nav_links, profile } from "../data/site";

const Navbar = () => {
	const [menu_open, set_menu_open] = useState(false);
	const [active_id, set_active_id] = useState("about");

	useEffect(() => {
		const section_ids = nav_links.map((link) => link.id);

		const track_section = () => {
			const marker = window.scrollY + 140;
			let current_id = section_ids[0];
			section_ids.forEach((section_id) => {
				const section = document.getElementById(section_id);
				if (section && section.offsetTop <= marker) {
					current_id = section_id;
				}
			});
			set_active_id(current_id);
		};

		track_section();
		window.addEventListener("scroll", track_section, { passive: true });
		return () => window.removeEventListener("scroll", track_section);
	}, []);

	const close_menu = () => set_menu_open(false);

	return (
		<div className="sticky top-0 z-40 bg-cream/80 pt-4 backdrop-blur-md">
			<Frame>
				<nav
					className={`border border-line bg-card/95 px-2 py-2 shadow-hud ${
						menu_open ? "rounded-[28px]" : "rounded-full"
					}`}
				>
					<div className="flex items-center gap-3">
						<a href="#about" className="flex min-w-0 items-center gap-2 pl-1">
							<span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-royal/10">
								<Pacman className="h-6 w-6" />
							</span>
							<span className="truncate font-display text-sm font-bold tracking-wide">
								{profile.name.toUpperCase()}
							</span>
						</a>

						<ul className="hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-6">
							{nav_links.map((link) => {
								const is_active = active_id === link.id;
								return (
									<li key={link.id}>
										<a
											href={`#${link.id}`}
											className={`inline-flex items-baseline gap-1 text-[11px] font-bold tracking-[0.14em] transition-colors ${
												is_active ? "text-ink" : "text-muted hover:text-ink"
											}`}
										>
											{is_active ? (
												<span className="mb-0.5 inline-block h-1.5 w-1.5 self-center rounded-full bg-arcade" />
											) : null}
											{link.label}
											<span className="hidden text-[10px] font-medium tracking-normal text-muted xl:inline">
												(LVL {link.level})
											</span>
										</a>
									</li>
								);
							})}
						</ul>

						<div className="ml-auto flex items-center gap-2 pr-1">
							<a
								href="#contact"
								className="rounded-full bg-arcade px-3 py-2 text-[11px] font-bold tracking-[0.14em] text-[#1a1400] transition hover:brightness-95 sm:px-4"
							>
								<span className="sm:hidden">COIN</span>
								<span className="hidden sm:inline">INSERT COIN</span>
							</a>
							<DarkToggle className="grid h-9 w-9 place-items-center rounded-full text-ink transition hover:bg-cream" />
							<img
								src="passport.png"
								alt={profile.name}
								className="hidden h-9 w-9 rounded-full object-cover ring-2 ring-arcade/80 sm:block"
							/>
							<button
								type="button"
								className="grid h-9 w-9 place-items-center rounded-full text-ink lg:hidden"
								aria-expanded={menu_open}
								aria-label={menu_open ? "Close menu" : "Open menu"}
								onClick={() => set_menu_open(!menu_open)}
							>
								{menu_open ? (
									<HiOutlineX className="h-5 w-5" />
								) : (
									<HiOutlineMenu className="h-5 w-5" />
								)}
							</button>
						</div>
					</div>

					{menu_open ? (
						<ul className="mt-2 space-y-1 border-t border-line px-2 py-3 lg:hidden">
							{nav_links.map((link) => (
								<li key={link.id}>
									<a
										href={`#${link.id}`}
										onClick={close_menu}
										className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm font-semibold tracking-[0.12em] hover:bg-cream"
									>
										{link.label}
										<span className="text-[10px] font-medium text-muted">
											LVL {link.level}
										</span>
									</a>
								</li>
							))}
						</ul>
					) : null}
				</nav>
			</Frame>
		</div>
	);
};

export default Navbar;
