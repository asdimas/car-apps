import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import checkList from "../../../assets/icon-checklist.png";
import imgService from "../../../assets/img-service.png";

const Service = () => {
  return (
    <>
      <Container className="service-section" id="service">
        <Row className="service-section">
          <Col className="img-service">
            <img src={imgService} alt="" />
          </Col>
          <Col className="desc mt-4">
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="list-service">
              <li>
                <img src={checkList} className="me-3" alt="" />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </li>
              <li>
                <img src={checkList} className="me-3" alt="" />
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </li>
              <li>
                <img src={checkList} className="me-3" alt="" />
                Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li>
                <img src={checkList} className="me-3" alt="" />
                Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li>
                <img src={checkList} className="me-3" alt="" />
                Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Service;
