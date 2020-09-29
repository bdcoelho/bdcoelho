import React, { useEffect } from "react";
import ProfileImage from "../assets/img/ProfilePicture.jpg";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import resume from "../assets/Resume-Coelho,Benson.pdf"

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id="section-about">
      <Container className="justify-content-center">
        <Row className="justify-content-center">
          <Col>
            <h2 data-aos="fade-right">About</h2>
            <div className="header-bar" data-aos="fade-left"></div>
          </Col>
        </Row>

        <Row className="justify-content-center about-margin profile-pic intro-text">
          <Col lg={4} data-aos="fade-right">
            <img className="align-img" src={ProfileImage} alt="profile" />
          </Col>

          <Col data-aos="fade-left">
            <p>
              I'm a full-stack Web Developer drawing on years of engineering
              experience with thermal modelling and associated software
              development. Although my professional background is Mechanical
              Engineering, I became interested in and started to learn
              software/web-development while working collaboratively in a team
              of engineers and developers building innovative engineering
              web-applications. Monash University bootcamp was a great way to
              build on and hone those skills towards becoming a professional
              full-stack developer.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <a
              type="button"
              className="btn btn-outline-secondary pdf-link about-margin"
              href={resume}
              download
            >
              Download Resume
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
