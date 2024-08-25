import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const DarkToggle = ({ className }) => {
	const [darkMode, setDarkMode] = useState(true);
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<button
			onClick={toggleDarkMode}
			className={className}>
			{darkMode ? (
				<MdDarkMode className={className} />
			) : (
				<CiLight className={className} />
			)}
		</button>
	);
};

export default DarkToggle;
