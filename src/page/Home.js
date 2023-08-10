import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
// import Blog from "../components/Blog";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Timeline />
      {/* <Blog /> */}
      <Contact />
    </>
  );
};

export default Home;
