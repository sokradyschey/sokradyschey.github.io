import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ChartColumnBig } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Analytics Dashboard",
      desc: "Real-time data visualization dashboard with interactive charts.",
      stack: ["HTMX", "Highcharts.js", "Python", "Bootstrap"],
      gradient: "bg-gradient-calm",
      icon: <ChartColumnBig color="#ffffff" size={100} strokeWidth={2} />,
      demo: "https://www.figma.com/design/E8duKg59Q3GvW7W2LiZpPw/Lab-Intelligence-UI-Components--Copy-?node-id=1-571&t=AlaPG34dRW02uVIC-1",
      github: "#",
    },
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold fs-1 text-dark mb-3">Featured Projects</h2>
        <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          Here are some of my recent projects that showcase my skills and passion.
        </p>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((proj, idx) => (
          <Col key={idx}>
            <Card className="shadow-sm border-0 card-hover h-100">
              <div
                className={`d-flex align-items-center justify-content-center ${proj.gradient}`}
                style={{ height: "180px" }}
              >
                {proj.icon}
              </div>
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text className="text-secondary">{proj.desc}</Card.Text>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="badge bg-light text-secondary border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary fw-semibold me-3"
                  >
                    Demo
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary"
                  >
                    GitHub
                  </a>
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
