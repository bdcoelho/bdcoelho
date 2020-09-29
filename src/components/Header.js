import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { scroller } from "react-scroll";

function NavigationMenu() {
  const handleAboutLinkClicked = () => {
    scroller.scrollTo("about", {
      smooth: true,
    });
  };

  const handleCareerLinkClicked = () => {
    scroller.scrollTo("career-edu", {
      smooth: true,
    });
  };

  const handlePortfolioLinkClicked = () => {
    scroller.scrollTo("portfolio", {
      smooth: true,
    });
  };

  const handleContactLinkClicked = () => {
    scroller.scrollTo("contact", {
      smooth: true,
    });
  };

  return (
    <Navbar
      id="navbar"
      className="justify-content-start"
      expand="md"
      sticky="top"
    >
      <Nav.Item>
        <Nav.Link
          href="https://www.linkedin.com/in/benson-esd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="https://github.com/bdcoelho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </Nav.Link>
      </Nav.Item>

      <Navbar.Toggle
        className="toggle-icon ml-auto"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link
              className="nav-link"
              href="#about"
              onClick={handleAboutLinkClicked}
              style={{ color: "#ffffff", fontWeight: 400 }}
            >
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="nav-link"
              href="#career-edu"
              onClick={handleCareerLinkClicked}
              style={{ color: "#ffffff", fontWeight: 400 }}
            >
              Career &amp; Education
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="nav-link"
              href="#portfolio"
              onClick={handlePortfolioLinkClicked}
              style={{ color: "#ffffff", fontWeight: 400 }}
            >
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="nav-link"
              href="#contact"
              onClick={handleContactLinkClicked}
              style={{ color: "#ffffff", fontWeight: 400 }}
            >
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationMenu;
