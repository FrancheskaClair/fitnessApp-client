import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import '../index.css';

const AboutUs = () => {
  return (
    <section className="about-us-page py-5">
      <Container>

        {/* Header */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={10}>
            <div className="bg-light p-5 rounded shadow-sm">
              <h2 className="mb-3 text-uppercase" style={{ color: '#96a852' }}>About Us</h2>
              <p className="lead text-muted">
                WellSync began in 2024 with a mission to make wellness accessible, simple, and engaging. We help individuals take control of their fitness journey through intuitive, user-friendly tools.
              </p>
            </div>
          </Col>
        </Row>

        {/* Contact Info Section */}
        <Row className="justify-content-center mb-5">
          <Col md={10}>
            <Card className="p-4 shadow-sm border-0">
              <h4 className="mb-3 text-center" style={{ color: '#96a852' }}>Contact Us</h4>
              <p className="text-muted text-center mb-4">
                We're happy to answer your questions or hear your ideas!
              </p>
              <Row className="text-center">
                <Col md={4}>
                  <h6>Email</h6>
                  <p className="text-muted">support@wellsync.app</p>
                </Col>
                <Col md={4}>
                  <h6>Phone</h6>
                  <p className="text-muted">+63 912 345 6789</p>
                </Col>
                <Col md={4}>
                  <h6>Location</h6>
                  <p className="text-muted">Quezon City, Philippines</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="p-4 shadow-sm border-0">
              <h4 className="mb-4 text-center" style={{ color: '#96a852' }}>FAQs</h4>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Is WellSync free to use?</Accordion.Header>
                  <Accordion.Body>
                    Yes, WellSync is free to get started with. We also offer optional premium features for advanced users.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Can I track both workouts and wellness habits?</Accordion.Header>
                  <Accordion.Body>
                    Yes! You can track workouts, meals, sleep, mood, and more — all from one dashboard.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Is it mobile-friendly?</Accordion.Header>
                  <Accordion.Body>
                    Absolutely. WellSync is fully responsive and works great on smartphones, tablets, and desktops.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default AboutUs;
