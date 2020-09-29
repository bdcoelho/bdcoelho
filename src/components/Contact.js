import React from 'react';
import emailjs from 'emailjs-com';
import { Row, Container } from 'react-bootstrap';

function Contact() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_tn28inc', e.target, 'user_Kj8sFmcsAhtLR9VG5VTTi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

e.target.reset();
  }

  return (
    <section id="contact">
      <Container>
          <Row>
            <div className="col-md-12 flex">
              <h2 data-aos="fade-right">Contact Me</h2>
              <div className="header-bar" data-aos="fade-left"></div>
              <form id="contact-form" onSubmit={sendEmail}>
                <Row>
                  <div className="col-md-12">
                    <input name="user_name"
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                    <input name="user_email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <textarea name="message"
                      type="text"
                      id="message-form-control"
                      className="form-control"
                      placeholder="Message"

                    />
                    <button id="button-submit" type="submit" value="Send" className="btn btn-primary">
                      Send Email
                    </button>
                  </div>
                </Row>
              </form>
            </div>
          </Row>
      </Container>
    </section>
  )
}

export default Contact;
