import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Facebook from "../../../assets/facebook.png";
import Instagram from "../../../assets/instagram.png";
import Twitter from "../../../assets/twitter.png";
import Mail from "../../../assets/mail.png";
import Twitch from "../../../assets/twitch.png";

const FooterComponent = () => {
  return (
    <>
      <Container className="footer-section">
        <Row>
          <Col lg="4">
            <div className="fw-bold">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
          </Col>
          <Col lg="2">
            <ul>
              <li>Our services</li>
              <li>Why Us</li>
              <li>Testimonial</li>
              <li>FAQ</li>
            </ul>
          </Col>
          <Col lg="4">
            <p className="fw-semibold">Connect with us</p>
            <a href="https://facebook.com">
              <img src={Facebook} alt="" />
            </a>
            <a href="https://instagram.com">
              <img src={Instagram} alt="" />
            </a>
            <a href="https://twitter.com">
              <img src={Twitter} alt="" />
            </a>
            <a href="https://mail.google.com">
              <img src={Mail} alt="" />
            </a>
            <a href="https://twitch.tv">
              <img src={Twitch} alt="" />
            </a>
          </Col>
          <Col lg="2">
            <p className="fw-semibold">Copyright Binar 2022</p>
            <div className="navbar-brand"></div>
          </Col>
        </Row>
      </Container>
      ;
    </>
  );
};

export default FooterComponent;
