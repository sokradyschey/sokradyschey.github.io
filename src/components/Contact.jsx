import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

function Contact() {
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaValue) {
        alert("Please verify you are not a robot.");
        return;
        }

        const form = e.target;

        emailjs
        .sendForm(
            "service_5ha39cn",
            "template_ji34fhs",
            form,
            "ohacLB1l-8nPSz9Fb"
        )
        .then(
            (result) => {
            alert("Message sent successfully!");
            form.reset();
            setCaptchaValue(null);
            },
            (error) => {
            alert("Error sending message, please try again.");
            }
        );
    };
  return (
    <Container className="py-5">
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
            <div className="d-flex gap-3">
                <div className="d-flex gap-3 items-center">
                    <div className="bg-accent py-2 px-2 rounded d-flex align-items-center justify-content-center">
                        <Button variant="link" href="mailto:sokradychey@gmail.com"><Mail color="#9333EA" size={24}/></Button>
                    </div>
                </div>
                <div className="d-flex gap-3 items-center">
                    <div className="bg-accent py-2 px-2 rounded d-flex align-items-center justify-content-center">
                        <Button variant="link" href="linkedin.com/in/sokradychey"><Linkedin color="#9333EA" size={24}/></Button>
                    </div>
                </div>
                <div className="d-flex gap-3 items-center">
                    <div className="bg-accent py-2 px-2 rounded d-flex align-items-center justify-content-center">
                    <Button variant="link" href="https://github.com/sokradyschey"><Github color="#9333EA" size={24}/></Button>
                    </div>
                </div>
            </div>
        </Col>

        <Col md={6}>
            <Card className="shadow-sm border-0">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" required />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} name="message" required />
                </Form.Group>
                <ReCAPTCHA
                    sitekey="6Ld-xusrAAAAAN_0-6oVVsjt3SaN5zrJRzfTxlX3"
                    onChange={(value) => setCaptchaValue(value)}
                    className="mb-4 w-100"
                />
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
