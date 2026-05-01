import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Tabs, Tab, Button } from "react-bootstrap";
import { Code2, Palette, Server, SearchCheck, Download } from "lucide-react";

function About() {
  const [activeTab, setActiveTab] = useState("who");

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
      text: "Ensuring high-quality software through meticulous testing, identifying bugs, and optimizing performance.",
      icon: <SearchCheck color="#9333EA" size={24} />,
    },
  ];

  return (
    <Container className="py-5">

      {/* Page Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold fs-1 text-dark mb-3">About Me</h2>
      </div>

      {/* Tabs */}
      <Tabs
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key)}
        className="mb-4 justify-content-center"
        fill
      >
        <Tab eventKey="who" title="Who I Am">
          {/* WHO I AM CONTENT */}
          <Row className="align-items-center g-5 pt-4">
            <Col md={6}>
              <h3 className="fw-semibold mb-4">Turning Ideas into Interactive Experiences</h3>
              <p className="text-secondary">
                As a Frontend Software Engineer with a strong front-end focus,
                I bring over 4 years of experience building responsive,
                high-performance web applications.
              </p>
              <Button href="https://drive.google.com/file/d/1NBmI5TYfQu_AjKVNf0nTLD1qYvgM6SYt/view?usp=sharing" target="_blank" rel="noopener noreferrer" variant="secondary" className="fw-semibold text-white rounded-pill px-3 py-2">Download CV <Download class="align-text-bottom" color="#FFFFFF" size={20}/></Button>
            </Col>
          </Row>
        </Tab>

        {/* EXPERIENCE TAB */}
        <Tab eventKey="experience" title="Experience">
          <div className="pt-4">
            <h3 className="fw-semibold mb-4">Experience</h3>
              <div className="mb-4">
              <h5 className="fw-bold">Frontend Engineer — RVO Health</h5>
              <small className="text-secondary">2026 – Current</small>
              <p className="mt-2 text-secondary">
                Leading the development of a public health initiative using React, TypeScript, and Tailwind, improving user engagement and satisfaction.
              </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold">Frontend Developer — LabWare</h5>
                <small className="text-secondary">2023 – 2024</small>
                <p className="mt-2 text-secondary">
                  Built dashboards, reusable UI components, and internal tools using React, TypeScript, Tailwind, Flask, and Highcharts.js.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold">Technical Project Manager — LabWare</h5>
                <small className="text-secondary">2022 – 2023</small>
                <p className="mt-2 text-secondary">
                  Managed client implementations, coordinated development timelines, and oversaw front-end feature delivery.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold">Freelance WordPress Developer</h5>
                <small className="text-secondary">2018 – 2021</small>
                <p className="mt-2 text-secondary">
                  Designed and developed custom WordPress sites for small businesses, focusing on UX, responsiveness, and SEO.
                </p>
              </div>
          </div>
        </Tab>

        {/* SKILLS TAB */}
        <Tab eventKey="skills" title="Skills">
          <div className="pt-4">
            <h3 className="fw-semibold mb-4">Skills</h3>
              <Col md={12}>
                <div className="d-flex flex-wrap gap-2">
                    {[
                      "Bootstrap", "Tailwind", "HTMX", "JavaScript", "React",
                      "UI/UX Design", "Figma", "SQL", "Python", "Flask",
                      "Highcharts.js", "QA Testing"
                    ].map((skill) => (
                      <Badge pill key={skill} bg="light" className="bg-accent border px-2 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
              </Col>
              <Row xs={1} md={6} lg={3} className="g-3 pt-4">
              {cards.map((card) => (
                <Col>
                <Card key={card.title} className="mb-4 shadow-sm border-0 card-hover">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-accent p-3 rounded me-3 d-flex align-items-center justify-content-center">
                        {card.icon}
                      </div>
                      <h5 className="fw-semibold mb-0">{card.title}</h5>
                    </div>
                    <p className="text-secondary mb-0">{card.text}</p>
                  </Card.Body>
                </Card>
                </Col>
              ))}
            
            </Row>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default About;
