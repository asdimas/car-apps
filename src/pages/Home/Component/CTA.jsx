import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <Container className="cta-section ">
        <Row>
          <Col>
            <Card className="text-center py-5 cta-card rounded-4">
              <Card.Body>
                <Card.Title className="text-white cta-title fs-3">
                  Sewa Mobil di (Lokasimu) Sekarang
                </Card.Title>
                <Card.Text className="text-white fs-6 mt-3 mb-5 cta-subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button className="text-white fw-semibold btn-sewa px-4 py-2">
                  <Link to="/find" className="text-decoration-none text-white">
                    Mulai Sewa Mobil
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CTA;
