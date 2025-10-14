import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Projects() {
  return (
    <Container>
        <div className="text-center mb-5">
        <h2 className="fw-bold fs-1 text-dark mb-3">Featured Projects</h2>
        <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            Here are some of my recent projects that showcase my skills and passion.
        </p>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
        {[
            {
            title: "E-Commerce Platform",
            desc: "A full-stack e-commerce solution with React, Node.js, and Stripe.",
            stack: ["React", "Node.js", "MongoDB"],
            gradient: "bg-gradient-to-br from-blue-400 to-purple-500",
            },
            {
            title: "Analytics Dashboard",
            desc: "Real-time data visualization dashboard with interactive charts.",
            stack: ["Vue.js", "D3.js", "Python"],
            gradient: "bg-gradient-to-br from-green-400 to-blue-500",
            },
            {
            title: "Chat Application",
            desc: "Real-time messaging app with rooms, file sharing, and emoji reactions.",
            stack: ["Socket.io", "Express", "Redis"],
            gradient: "bg-gradient-to-br from-pink-400 to-red-500",
            },
        ].map((proj, idx) => (
            <Col key={idx}>
            <Card className="shadow-sm border-0 card-hover h-100">
                <div className={`d-flex align-items-center justify-content-center ${proj.gradient}`} style={{ height: "180px" }}>
                <i className="bi bi-window text-white fs-1"></i>
                </div>
                <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text className="text-secondary">{proj.desc}</Card.Text>
                <div className="d-flex flex-wrap gap-2 mb-3">
                    {proj.stack.map((tech) => (
                    <span key={tech} className="badge bg-light text-secondary border">{tech}</span>
                    ))}
                </div>
                <div>
                    <a href="#" className="text-primary fw-semibold me-3">Live Demo</a>
                    <a href="#" className="text-secondary">GitHub</a>
                </div>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    </Container>
  );
}

export default Projects;
