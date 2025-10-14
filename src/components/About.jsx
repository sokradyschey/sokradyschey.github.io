import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container>
        <div className="text-center mb-5">
        <h2 className="fw-bold fs-1 text-dark mb-3">About Me</h2>
        <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference.
        </p>
        </div>

        <Row className="align-items-center g-5">
        <Col md={6}>
            <h3 className="fw-semibold mb-4">My Story</h3>
            <p className="text-secondary">
            Started as a curious computer science student, I've evolved into a full-stack developer who loves turning
            complex problems into simple, elegant solutions. I believe great design and clean code go hand in hand.
            </p>
            <p className="text-secondary mb-4">
            When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or enjoying
            a good cup of coffee while sketching out my next big idea.
            </p>
            <div className="d-flex flex-wrap gap-2">
            {["JavaScript", "React", "Node.js", "Python", "UI/UX Design", "MongoDB"].map((skill) => (
                <span key={skill} className="badge bg-light text-primary border border-primary">{skill}</span>
            ))}
            </div>
        </Col>

        <Col md={6}>
            {[
            { title: "Frontend Development", text: "Creating responsive, interactive user interfaces.", icon: "bi-code-slash" },
            { title: "Backend Development", text: "Building robust APIs and server-side apps.", icon: "bi-server" },
            { title: "UI/UX Design", text: "Designing intuitive user experiences with aesthetics.", icon: "bi-palette" },
            ].map((card) => (
            <Card key={card.title} className="mb-4 shadow-sm border-0 card-hover">
                <Card.Body>
                <div className="d-flex align-items-center mb-3">
                    <div className="bg-light p-3 rounded me-3">
                    <i className={`bi ${card.icon} fs-4 text-primary`}></i>
                    </div>
                    <h5 className="fw-semibold mb-0">{card.title}</h5>
                </div>
                <p className="text-secondary mb-0">{card.text}</p>
                </Card.Body>
            </Card>
            ))}
        </Col>
        </Row>
    </Container>
  );
}

export default About;
