import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import careerHighlights from "../utils/careerHighlights.json";
import { Container, Row } from "react-bootstrap";


let VALUES = careerHighlights.map((a) => a.value);

const Career = () => {
  const [item, setItem] = useState({
    value: careerHighlights.length - 1,
    previous: 0,
  });

  return (
    <section id="section-career">
      <Container className="d-flex justify-content-center">
        <Row>
          <div className="flex">
            <h2 data-aos="fade-right" className="flex">
              Career &amp; Education
            </h2>
            <div
              className="header-bar aos-init aos-animate"
              data-aos="fade-left"
            ></div>
            <div>

              <div
                data-aos="flip-up"
                className="timeline"
                style={{
                  width: "100%",
                  height: "125px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <HorizontalTimeline
                  labelWidth={200}
                  index={item.value}
                  indexClick={(index) => {
                    setItem({ ...item, value: index, previous: item.value });
                  }}
                  getLabel={function (date, index) {
                    return (
                      <div>
                        {careerHighlights[index].type === "Work" ? (
                          <i className="fas fa-briefcase"></i>
                        ) : (
                          <i className="fas fa-user-graduate"></i>
                        )}
                        <div>{date}</div>
                      </div>
                    );
                  }}
                  styles={{
                    background: "#95b6b8",
                    foreground: "#0eabb1",
                    outline: "#0eabb1",
                  }}
                  values={VALUES}
                />
              </div>
              <div data-aos="fade-left" className="text-center">
                <h3 className="animate__fadeIn">{careerHighlights[item.value].description}</h3>
                <h6 className="animate__fadeIn">{careerHighlights[item.value].location}</h6>
                <p className="animate__fadeIn"
                  style={{
                    fontSize: "15px",
                  }}
                >
                  {careerHighlights[item.value].slug}
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};
export default Career;
