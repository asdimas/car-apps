import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import carImage from "../../../assets/img_car1.png";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className="hero-section">
          <Col className="hero-headline">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Button className="text-white fw-semibold btn-sewa px-4 py-2">
              <Link to="/find" className="text-decoration-none text-white">
                Mulai Sewa Mobil
              </Link>
            </Button>
          </Col>
          <Col className="hero-image">
            <img className="img-car" src={carImage} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Jumbotron;
