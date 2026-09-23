import Frame from "./Frame";
import { nav_links, profile } from "../data/site";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-line py-8">
			<Frame>
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-sm text-muted">
						© {year} {profile.name}
						<span className="px-2 text-line">·</span>
						Made with care
					</p>
					<ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium">
						{nav_links.map((link) => (
							<li key={link.id}>
								<a href={`#${link.id}`} className="hover:text-royal">
									{link.label.charAt(0) + link.label.slice(1).toLowerCase()}
								</a>
							</li>
						))}
						<li>
							<a
								href={profile.x_url}
								target="_blank"
								rel="noreferrer"
								className="hover:text-royal"
							>
								X
							</a>
						</li>
					</ul>
				</div>
			</Frame>
		</footer>
	);
};

export default Footer;
