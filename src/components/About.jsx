import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Code2, Palette } from "lucide-react";

function About() {
  const cards = [
    {
      title: "Frontend Development",
      text: "Creating responsive, interactive user interfaces.",
      icon: <Code2 color="#9333EA" size={24} />,
    },
    {
      title: "UI/UX Design",
      text: "Designing intuitive user experiences with aesthetics.",
      icon: <Palette color="#9333EA" size={24} />,
    },
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold fs-1 text-dark mb-3">About Me</h2>
        <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          Passionate UI/UX Developer with a love for crafting seamless digital experiences.
        </p>
      </div>

      <Row className="align-items-center g-5">
        {/* Left Column - Story */}
        <Col md={6}>
          <h3 className="fw-semibold mb-4">Building Digital Solutions</h3>
          <p className="text-secondary">
            With 3+ years of experience in web development, I specialize in creating responsive, 
            user-friendly applications using modern technologies. I'm passionate about writing 
            clean, maintainable code and delivering exceptional user experiences.
          </p>
          <div className="d-flex flex-wrap gap-2">
            {["Bootstrap", "Tailwind", "HTMX","JavaScript", "React", "UI/UX Design"].map((skill) => (
                <Badge pill key={skill} bg="light" className="bg-accent border border-accent px-2 py-1">
                    {skill}
                </Badge>
            ))}
          </div>
        </Col>

        {/* Right Column - Skill Cards */}
        <Col md={6}>
          {cards.map((card) => (
            <Card key={card.title} className="mb-4 shadow-sm border-0 card-hover">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-accent text-primary p-3 rounded me-3 d-flex align-items-center justify-content-center">
                    {card.icon}
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
