export const Pacman = ({ className = "h-7 w-7" }) => {
	return (
		<svg viewBox="0 0 64 64" className={className} aria-hidden="true">
			<path
				className="pacman-open"
				fill="#FFD600"
				d="M32 32 L53.3 17.1 A26 26 0 1 1 53.3 46.9 Z"
			/>
			<path
				className="pacman-closed"
				fill="#FFD600"
				d="M32 32 L57.8 28.4 A26 26 0 1 1 57.8 35.6 Z"
			/>
		</svg>
	);
};

export const Ghost = ({ color = "#E10600", className = "h-7 w-7" }) => {
	return (
		<svg viewBox="0 0 40 42" className={className} aria-hidden="true">
			<path
				fill={color}
				d="M6 19.5C6 11 12.3 4.5 20 4.5S34 11 34 19.5v16.4l-3.3-2.7-3.4 2.8-3.3-2.8-3.4 2.8-3.3-2.8L14 36l-3.3-2.7L6 36.2V19.5z"
			/>
			<circle cx="15" cy="18.5" r="3.2" fill="#fff" />
			<circle cx="25.5" cy="18.5" r="3.2" fill="#fff" />
			<circle cx="16.2" cy="19.1" r="1.5" fill="#1b1b3a" />
			<circle cx="26.7" cy="19.1" r="1.5" fill="#1b1b3a" />
		</svg>
	);
};
