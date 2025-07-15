import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import '../index.css';

const AboutUs = () => {
  return (
    <section className="about-us-page py-5">
      <Container>

        {/* Title Block */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <div className="title-box p-4">
              <h2 className="section-heading">About Us</h2>
              <p className="section-subtitle">
                Empowering your wellness journey through a beautifully synced platform.
              </p>
            </div>
          </Col>
        </Row>

        {/* Split Content Section */}
        <Row className="gx-5 mb-5">
          <Col md={6}>
            <div className="info-box h-100 p-4">
              <h4 className="subheading">Who We Are</h4>
              <p className="info-text">
                WellSync is built by passionate individuals who understand that wellness is personal. We believe in making health and fitness accessible,
                motivating, and fun — through tools that are intuitive and designed with your journey in mind.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="info-box h-100 p-4">
              <h4 className="subheading">What We Offer</h4>
              <p className="info-text">
                From personalized workout tracking to wellness journaling, WellSync adapts to your lifestyle. We focus on simplicity,
                accountability, and flexibility — because your path to wellness should feel natural and rewarding.
              </p>
            </div>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="faq-card p-4">
              <h3 className="faq-heading text-center mb-4">Frequently Asked Questions</h3>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Is WellSync free to use?</Accordion.Header>
                  <Accordion.Body>
                    Yes, you can start using WellSync for free. Premium features are available for enhanced tracking and insights.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Can I track both workouts and wellness?</Accordion.Header>
                  <Accordion.Body>
                    Absolutely. Log your fitness routines, nutrition, sleep, and even your mood — all in one place.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Is WellSync mobile-friendly?</Accordion.Header>
                  <Accordion.Body>
                    Yes. WellSync is fully responsive and works seamlessly across smartphones, tablets, and desktops.
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
