import React from "react";

const Baselayout = ({ children }) => {
	return (
		<div
			className="dark:bg-dark bg-light max-w-6xl mx-auto px-5 md:px-0">
			{children}
		</div>
	);
};

export default Baselayout;
