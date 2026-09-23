import Baselayout from "./components/Baselayout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Project from "./components/Project.jsx";

const App = () => {
	return (
		<Baselayout>
			<Navbar />
			<main>
				<Hero />
				<Project />
				<Skills />
				<section
					id="timeline"
					className="scroll-mt-28 py-16 sm:py-20"
				>
					<div className="mx-auto grid w-full max-w-6xl gap-14 px-4 sm:px-6 xl:grid-cols-2 xl:gap-10">
						<Experience />
						<Education />
					</div>
				</section>
				<Contact />
			</main>
			<Footer />
		</Baselayout>
	);
};

export default App;
