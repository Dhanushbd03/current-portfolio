const Baselayout = ({ children }) => {
	return (
		<div className="min-h-screen bg-cream font-sans text-ink antialiased">
			<div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-gradient-to-r from-royal via-arcade to-pinky" />
			<a
				href="#about"
				className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-arcade focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#1a1400]"
			>
				Skip to content
			</a>
			{children}
		</div>
	);
};

export default Baselayout;
