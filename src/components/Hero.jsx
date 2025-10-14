import React from "react";
import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <div className="gradient-bg text-center d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Container>
        <h1 className="display-4 fw-bold">Hi, I’m Sokrady 👋</h1>
        <p className="lead">UI/UX Software Engineer & QA Analyst</p>
        <p className="mb-4">
          I create beautiful, functional web applications that solve real-world problems. 
          Let's build something amazing together.
        </p>
        <div className="gap-2 d-flex justify-content-center">
          <Button href="#projects" variant="primary" className="rounded-pill">View My Work</Button>
          <Button href="#contact"variant="secondary" className="rounded-pill">Get In Touch</Button>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
