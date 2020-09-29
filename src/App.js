import React from "react";
import "./App.css";
import SectionHome from "./components/Home";
import Header from "./components/Header";
import Career from "./components/Career";
import About from "./components/About";
import { Element } from "react-scroll";
import PortfolioSection from "./components/Portfolio";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Invalid from "./components/Invalid";

function App() {
  return (
    <Router>
      <div className=".container-fluid">
        <Switch>
          <Route exact path="/">
            <SectionHome />
            <Header />
            <Element name="about"></Element>
            <About />
            <Element name="career-edu"></Element>
            <Career />
            <Element name="portfolio"></Element>
            <PortfolioSection />
            <Element name="contact"></Element>
            <ContactSection />
          </Route>

          <Route path="*">
            <Header />
            <Invalid />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
