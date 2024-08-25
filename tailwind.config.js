/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				dark: "#011627",
				light: "#DDD8B8",
				anchor: "#85756E",
			},
			fontFamily: {
				moulpali: ["Moulpali", "sans-serif"], // Add the Moulpali font
			},
		},
	},
	plugins: [],
};
