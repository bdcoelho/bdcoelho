import React from 'react';
import './index.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { animateScroll as scroll, scroller } from 'react-scroll';

function Home() {
  const handleButtonClicked = () => {
    scroller.scrollTo('about', {
      smooth: true,
    });
  }

  return (
    <section id="home" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center col-md-12">
            <p className="intro">
              Hi, I'm <span className="name">Benson Coelho</span>.
              <br />
              Engineer and Full-stack Developer
            </p>
          </Col>
          <Col className="d-flex justify-content-center col-md-12">
            <Button
              type="button"
              className="btn btn-outline-primary d-flex align-items-center btn-home"
              onClick={handleButtonClicked}
            >
              <div>See more</div>
              <i className="fa fa-arrow-right"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home;