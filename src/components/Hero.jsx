import React from "react";
import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <Container>
      <h1 className="display-4 fw-bold">Hi, I’m Sokrady 👋</h1>
      <p className="lead">UI/UX Software Developer & QA Analyst</p>
      <p className="mb-4">
        I create beautiful, functional web applications that solve real-world problems. 
        Let's build something amazing together.
      </p>
      <div className="gap-2 d-flex justify-content-center">
        <Button href="#projects" variant="light" className="fw-semibold text-primary rounded-pill px-5 py-3">View My Work</Button>
        <Button href="#contact" variant="outline-light" className="border-2 fw-semibold text-decoration-none rounded-pill px-5 py-3">Get In Touch</Button>
      </div>
    </Container>
  );
}

export default Hero;
