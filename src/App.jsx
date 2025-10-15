import React from "react";
import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
  <div className="smooth-scroll">
      <NavigationBar />
      <main>
        <section id="hero" className="bg-gradient-calm text-center d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects" className="section-surface">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
  </div>
  )
}