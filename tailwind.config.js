/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				cream: "rgb(var(--c-cream) / <alpha-value>)",
				card: "rgb(var(--c-card) / <alpha-value>)",
				ink: "rgb(var(--c-ink) / <alpha-value>)",
				muted: "rgb(var(--c-muted) / <alpha-value>)",
				line: "rgb(var(--c-line) / <alpha-value>)",
				royal: "rgb(var(--c-royal) / <alpha-value>)",
				stage: "rgb(var(--c-stage) / <alpha-value>)",
				arcade: "#FFD600",
				blinky: "#E10600",
				pinky: "#FF7AB8",
			},
			fontFamily: {
				sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
				display: ["Space Grotesk", "Outfit", "sans-serif"],
			},
			boxShadow: {
				hud: "0 12px 40px rgba(48, 36, 12, 0.06)",
			},
		},
	},
	plugins: [],
};
