import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container>
        <div className="text-center mb-5">
        <h2 className="fw-bold fs-1 text-dark mb-3">Get In Touch</h2>
        <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            Have a project in mind or just want to chat? I'd love to hear from you!
        </p>
        </div>

        <Row className="g-5">
        <Col md={6}>
            <h3 className="fw-semibold mb-4">Let's Connect</h3>
            <p className="text-secondary mb-4">
            I'm always open to discussing new opportunities, interesting projects, or just having a friendly conversation.
            </p>
            <div className="d-flex flex-column gap-3">
            <div><strong>Email:</strong> sokradychey@gmail.com</div>
            <div><strong>Location:</strong> Wilmington, DE</div>
            </div>
        </Col>

        <Col md={6}>
            <Card className="shadow-sm border-0">
            <Card.Body>
                <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 py-2">
                    Send Message
                </Button>
                </Form>
            </Card.Body>
            </Card>
        </Col>
        </Row>
    </Container>
  );
}

export default Contact;
