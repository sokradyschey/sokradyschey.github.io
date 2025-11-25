import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Code2, Palette, Server, SearchCheck } from "lucide-react";

function About() {
  const cards = [
    {
      title: "Frontend Development",
      text: "Building responsive, dynamic interfaces that combine performance, accessibility, and engaging design.",
      icon: <Code2 color="#9333EA" size={24} />,
    },
    {
      title: "Backend Development",
      text: "Building and refining my understanding of backend development, from creating APIs to designing scalable server-side systems.",
      icon: <Server color="#9333EA" size={24} />,
    },
    {
      title: "UI/UX Design",
      text: "Designing and developing intuitive, responsive interfaces that turn complex ideas into effortless user experiences.",
      icon: <Palette color="#9333EA" size={24} />,
    },
    {
      title: "QA Testing",
      text: "Ensuring high-quality software through meticulous testing, identifying bugs, and optimizing performance for seamless user experiences.",
      icon: <SearchCheck color="#9333EA" size={24} />,
    },
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold fs-1 text-dark mb-3">About Me</h2>
        <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          Passionate Frontend Software Developer with a love for crafting seamless digital experiences.
        </p>
      </div>

      <Row className="align-items-center g-5">
        {/* Left Column - Story */}
        <Col md={6}>
          <h3 className="fw-semibold mb-4">Turning Ideas into Interactive Experiences</h3>
          <p className="text-secondary">
            As a Frontend Software Developer with a strong front-end focus, 
            I bring over 3 years of experience building responsive, 
            high-performance web applications. 
            I love translating complex requirements into simple, 
            elegant interfaces—balancing usability, accessibility, 
            and performance to create products users truly enjoy.
          </p>
          <div className="d-flex flex-wrap gap-2">
            {["Bootstrap", "Tailwind", "HTMX", "JavaScript", "React", "UI/UX Design", "Figma", "SQL", "Python", "Flask", "Highcharts.js", "QA Testing"].map((skill) => (
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
