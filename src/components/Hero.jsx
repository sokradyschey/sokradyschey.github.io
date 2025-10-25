import React from "react";
import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <Container>
      <h1 className="display-4 fw-bold">Hi, I’m Sokrady 👋</h1>
      <p className="fs-4">Software Developer</p>
      <p className="mb-4 fs-5">
        I bring designs to life through responsive, interactive, and meaningful web experiences. Let’s build something users will love.
      </p>
      <div className="gap-2 d-flex justify-content-center">
        <Button href="#projects" variant="light" className="fw-semibold text-primary rounded-pill px-5 py-3">View My Work</Button>
        <Button href="#contact" variant="outline-light" className="border-2 fw-semibold text-decoration-none rounded-pill px-5 py-3">Get In Touch</Button>
      </div>
    </Container>
  );
}

export default Hero;
