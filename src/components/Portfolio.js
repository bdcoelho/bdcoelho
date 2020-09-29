import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PortfolioCard from './PortfolioCard';
import portfolioItems from '../utils/portfolio'

function Portfolio() {

  return (
    <section id="section-portfolio">
      <Container>
        <Row>
          <div className="portfolio col-md-12 flex">
            <h2 data-aos="fade-right">Portfolio</h2>
            <div className="header-bar" data-aos="fade-left" />
            <Row id="portfolio-row">
              {portfolioItems.map(portfolioItem => (
                  <PortfolioCard 
                    image={portfolioItem.image}
                    app={portfolioItem.app}
                    name={portfolioItem.name}
                    github={portfolioItem.github}
                  />
                )
              )}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Portfolio