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
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </Baselayout>
  );
};

export default App;
