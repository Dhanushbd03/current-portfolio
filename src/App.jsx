import React from "react";
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
      <Hero />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </Baselayout>
  );
};

export default App;
