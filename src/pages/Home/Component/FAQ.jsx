import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <>
      <Container className="faq-section" id="faq">
        <Row>
          <Col lg="4">
            <h2 className="fw-semibold">Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </Col>
          <Col lg="1"></Col>

          <Col lg="7">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span className="change-fw">
                    Apa saja syarat yang dibutuhkan?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo laborum itaque ratione? Totam, quos. Doloribus et
                  ipsum, harum est, possimus explicabo pariatur veniam officia
                  atque nihil provident quos eligendi maxime!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="change-fw">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo laborum itaque ratione? Totam, quos. Doloribus et
                  ipsum, harum est, possimus explicabo pariatur veniam officia
                  atque nihil provident quos eligendi maxime!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span className="change-fw">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo laborum itaque ratione? Totam, quos. Doloribus et
                  ipsum, harum est, possimus explicabo pariatur veniam officia
                  atque nihil provident quos eligendi maxime!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <span className="change-fw">
                    Apakah Ada biaya antar-jemput?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo laborum itaque ratione? Totam, quos. Doloribus et
                  ipsum, harum est, possimus explicabo pariatur veniam officia
                  atque nihil provident quos eligendi maxime!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <span className="change-fw">
                    Bagaimana jika terjadi kecelakaan
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo laborum itaque ratione? Totam, quos. Doloribus et
                  ipsum, harum est, possimus explicabo pariatur veniam officia
                  atque nihil provident quos eligendi maxime!
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FAQ;
