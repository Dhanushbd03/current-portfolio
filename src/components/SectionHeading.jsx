const SectionHeading = ({ kicker, title, text, meta, compact = false }) => {
	const title_class = compact
		? "mt-2 font-display text-4xl font-bold tracking-tight text-ink"
		: "display-title mt-2";

	return (
		<div className="mb-8 flex flex-wrap items-end justify-between gap-4">
			<div className="max-w-2xl">
				<p className="kicker">{kicker}</p>
				<h2 className={title_class}>{title}</h2>
				{text ? (
					<p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
						{text}
					</p>
				) : null}
			</div>
			{meta ? (
				<p className="text-[11px] font-bold tracking-[0.18em] text-muted">
					{meta}
				</p>
			) : null}
		</div>
	);
};

export default SectionHeading;
