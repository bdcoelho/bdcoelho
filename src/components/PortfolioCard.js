import React from 'react';

function PortfolioCard(props) {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" data-aos="flip-up">
      <div className="hover-effect">
      <img src={props.image} className="img-responsive" alt="portfolio" />
        <div className="overlay">
          <a href={ props.app } target="_blank" rel="noopener noreferrer">
            <h2 className="title">{ props.name }</h2>
          </a>
          <p>
            <a href={ props.github } target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard