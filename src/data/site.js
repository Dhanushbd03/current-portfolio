export const profile = {
	name: "Dhanush B D",
	role: "Software Engineer",
	email: "bddhanush03@gmail.com",
	phone: "+91 8277014606",
	phone_href: "tel:+918277014606",
	website_url: "https://dhanushbd.vercel.app",
	website_label: "dhanushbd.vercel.app",
	linkedin_url: "https://www.linkedin.com/in/dhanushbd03",
	linkedin_label: "linkedin.com/in/dhanushbd03",
	github_url: "https://github.com/Dhanushbd03",
	github_label: "github.com/Dhanushbd03",
	x_url: "https://x.com/bddhanush",
	location: "Mangaluru, Karnataka",
	headline:
		"Full-stack production systems across web, mobile, APIs, and cloud.",
	summary:
		"Software Engineer with experience delivering full-stack production systems across backend services, web apps, mobile apps, databases, APIs, cloud infrastructure, and deployment. Strong hands-on with Go, JavaScript, React, Node.js, PostgreSQL, REST APIs, WebSockets, Docker, AWS, and Cloudflare.",
};

export const nav_links = [
	{ id: "about", label: "ABOUT", level: "01" },
	{ id: "projects", label: "PROJECTS", level: "02" },
	{ id: "skills", label: "SKILLS", level: "03" },
	{ id: "timeline", label: "TIMELINE", level: "04" },
	{ id: "contact", label: "CONTACT", level: "05" },
];

export const hero_metrics = [
	{ label: "CORE CLASS", value: "SOFTWARE ENGINEER" },
	{ label: "FOCUS", value: "FULL-STACK PROD" },
	{ label: "STACK READY", value: "GO · REACT · AWS" },
	{ label: "BASE CAMP", value: "MANGALURU" },
];

export const experience_roles = [
	{
		title: "Software Engineer",
		org: "Technical Career Education, Mangaluru",
		when: "JAN 2025 – PRESENT",
		dot: "bg-arcade",
		points: [
			"Develop and maintain full-stack EdTech and hiring systems using Go, Node.js, React, PostgreSQL, REST APIs, and AI integrations.",
			"Design backend services, API contracts, database schemas, authentication flows, and production deployment workflows.",
			"Implement, test, debug, and maintain features across frontend, backend, database, and deployment.",
			"Create technical documentation and troubleshoot across services for reliability.",
		],
	},
	{
		title: "Software Engineering Intern",
		org: "Kakunje Software Private Limited, Mangalore",
		when: "JUN 2024 – DEC 2024",
		dot: "bg-royal",
		points: [
			"Developed web application features and backend integrations; contributed to testing, debugging, documentation, and delivery.",
		],
	},
	{
		title: "Content Writer",
		org: "Srinivas University Institute of Engineering and Technology, Mukka",
		when: "JUN 2023 – OCT 2023",
		dot: "bg-pinky",
		points: [
			"Created and edited technical and educational content with emphasis on clear documentation, structure, accuracy, and user understanding.",
		],
	},
];

export const education_records = [
	{
		label: "B.TECH COMPUTER SCIENCE ENGINEERING",
		school:
			"Srinivas University Institute of Engineering and Technology, Mukka",
		when: "2021 – PRESENT",
		detail: "CGPA 8.95",
		dot: "bg-arcade",
	},
	{
		label: "PUC WITH SCIENCE",
		school: "Sri BGS Science and Commerce PU College, Balehonnur",
		when: "2019 – 2021",
		detail: "93%",
		dot: "bg-royal",
	},
	{
		label: "SSLC",
		school: "Ganapathy High School, Mangaluru",
		when: "2018 – 2019",
		detail: "91.82%",
		dot: "bg-pinky",
	},
];

export const skill_groups = [
	{
		title: "LANGUAGES",
		buff: "LOADOUT",
		buff_value: "CORE SYNTAX",
		buff_class: "text-royal",
		items: [
			{ name: "Go", tone: "bg-arcade" },
			{ name: "JavaScript", tone: "bg-royal" },
			{ name: "TypeScript", tone: "bg-arcade" },
			{ name: "PHP", tone: "bg-blinky" },
			{ name: "Dart", tone: "bg-pinky" },
			{ name: "Python", tone: "bg-ink" },
		],
	},
	{
		title: "BACKEND & SYSTEMS",
		buff: "SERVICES",
		buff_value: "APIS + AUTH",
		buff_class: "text-blinky",
		items: [
			{ name: "Node.js", tone: "bg-arcade" },
			{ name: "Express", tone: "bg-royal" },
			{ name: "Django", tone: "bg-ink" },
			{ name: "REST APIs", tone: "bg-arcade" },
			{ name: "WebSockets", tone: "bg-royal" },
			{ name: "OAuth", tone: "bg-blinky" },
			{ name: "API design", tone: "bg-pinky" },
			{ name: "Auth", tone: "bg-arcade" },
		],
	},
	{
		title: "FRONTEND & MOBILE",
		buff: "INTERFACE",
		buff_value: "WEB + MOBILE",
		buff_class: "text-royal",
		items: [
			{ name: "React", tone: "bg-arcade" },
			{ name: "Redux", tone: "bg-royal" },
			{ name: "Vite", tone: "bg-arcade" },
			{ name: "HTML", tone: "bg-ink" },
			{ name: "CSS", tone: "bg-[#C5C1B8]" },
			{ name: "Tailwind", tone: "bg-arcade" },
			{ name: "Bootstrap", tone: "bg-royal" },
			{ name: "shadcn/ui", tone: "bg-ink" },
			{ name: "Flutter", tone: "bg-pinky" },
		],
	},
	{
		title: "DATA & AI",
		buff: "CONTEXT",
		buff_value: "MODELS + RAG",
		buff_class: "text-pinky",
		items: [
			{ name: "PostgreSQL", tone: "bg-royal" },
			{ name: "MongoDB", tone: "bg-arcade" },
			{ name: "MySQL", tone: "bg-royal" },
			{ name: "Appwrite", tone: "bg-blinky" },
			{ name: "FastAPI", tone: "bg-arcade" },
			{ name: "LangChain", tone: "bg-pinky" },
			{ name: "Qdrant", tone: "bg-royal" },
			{ name: "Generative AI APIs", tone: "bg-ink" },
		],
	},
	{
		title: "CLOUD & ENGINEERING",
		buff: "DEPLOY",
		buff_value: "INFRA + OPS",
		buff_class: "text-blinky",
		items: [
			{ name: "AWS", tone: "bg-arcade" },
			{ name: "Cloudflare", tone: "bg-royal" },
			{ name: "Docker", tone: "bg-royal" },
			{ name: "Nginx", tone: "bg-ink" },
			{ name: "Vercel", tone: "bg-arcade" },
			{ name: "Render", tone: "bg-pinky" },
			{ name: "Git", tone: "bg-blinky" },
			{ name: "GitHub", tone: "bg-ink" },
			{ name: "Production deployment", tone: "bg-arcade" },
			{ name: "Debugging", tone: "bg-royal" },
			{ name: "Testing", tone: "bg-pinky" },
			{ name: "Documentation", tone: "bg-ink" },
		],
	},
];

export const contact_channels = [
	{
		kicker: "DIRECT DISPATCH",
		label: profile.email,
		href: `mailto:${profile.email}`,
		kind: "email",
	},
	{
		kicker: "DIRECT LINE",
		label: profile.phone,
		href: profile.phone_href,
		kind: "phone",
	},
	{
		kicker: "LIVE SITE",
		label: profile.website_label,
		href: profile.website_url,
		kind: "web",
	},
	{
		kicker: "NETWORK LINK",
		label: profile.linkedin_label,
		href: profile.linkedin_url,
		kind: "linkedin",
	},
	{
		kicker: "SOURCE DEPOT",
		label: profile.github_label,
		href: profile.github_url,
		kind: "github",
	},
];
