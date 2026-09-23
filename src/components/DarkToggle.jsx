import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const DarkToggle = ({ className }) => {
	const [is_dark, set_is_dark] = useState(false);

	const toggle_theme = () => {
		const next_is_dark = !is_dark;
		set_is_dark(next_is_dark);
		document.documentElement.classList.toggle("dark", next_is_dark);
	};

	return (
		<button
			type="button"
			onClick={toggle_theme}
			className={className}
			aria-label={is_dark ? "Switch to light theme" : "Switch to dark theme"}
		>
			{is_dark ? (
				<CiLight className="h-5 w-5" />
			) : (
				<MdDarkMode className="h-5 w-5" />
			)}
		</button>
	);
};

export default DarkToggle;
