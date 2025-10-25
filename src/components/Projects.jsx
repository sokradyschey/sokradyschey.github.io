import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ChartColumnBig, Sprout, BookMarked } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Analytics Dashboard",
      desc: "Real-time data visualization dashboard with interactive charts 📊📈",
      stack: ["HTMX", "Highcharts.js", "Python", "Bootstrap"],
      gradient: "bg-gradient-creative",
      icon: <ChartColumnBig color="#ffffff" size={100} strokeWidth={2} />,
      demo: "https://www.figma.com/design/E8duKg59Q3GvW7W2LiZpPw/Lab-Intelligence-UI-Components--Copy-?node-id=1-571&t=AlaPG34dRW02uVIC-1",
      github: "#",
    },
    {
      title: "Meditation App",
      desc: "Simple meditation app with timer, ambient sounds, and videos 🧘‍♂️🎵",
      stack: ["React.js", "CSS"],
      gradient: "bg-gradient-calm",
      icon: <Sprout color="#ffffff" size={100} strokeWidth={2} />,
      demo: "https://mediate.netlify.app/",
      github: "https://github.com/sokradyschey/meditation-app",
    },
    {
      title: "Recidex",
      desc: "Pokédex-styled recipe app built in Next.js 🎮🍳 (In Progress)",
      stack: ["Next.js", "Tailwind", "Typescript.js"],
      gradient: "bg-gradient-energize",
      icon: <BookMarked color="#ffffff" size={100} strokeWidth={2} />,
      demo: "#",
      github: "https://github.com/sokradyschey/recidex",
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
                className={`d-flex align-items-center justify-content-center card-img-top ${proj.gradient}`}
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

                <div className="d-flex gap-2 mt-3">
                  {proj.demo && proj.demo !== "#" && (
                    <Button 
                    variant="primary" 
                    href={proj.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                      Demo
                    </Button>
                  )}
                  {proj.github && proj.github !== "#" && (
                    <Button 
                    variant="secondary" 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                      Github
                    </Button>
                  )}
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
