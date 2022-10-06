import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import iconWhy1 from "../../../assets/why-1.png";
import iconWhy2 from "../../../assets/why-2.png";
import iconWhy3 from "../../../assets/why-3.png";
import iconWhy4 from "../../../assets/why-4.png";

const WhyUs = () => {
  return (
    <>
      <Container className="why-section" id="whyus">
        <div className="title-why">
          <h2 className="fw-semibold">Why Us?</h2>
          <p className="fw-semibold">Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <Row className="card-section">
          <Col lg="3">
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="mb-4">
                  <img src={iconWhy1} alt="" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-bold">
                  Mobil Lengkap
                </Card.Subtitle>
                <Card.Text>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="mb-4 fw-bold">
                  <img src={iconWhy2} alt="" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-bold">
                  Mobil Murah
                </Card.Subtitle>
                <Card.Text>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="mb-4 fw-bold">
                  <img src={iconWhy3} alt="" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-bold">
                  Layanan 24 Jam
                </Card.Subtitle>
                <Card.Text>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3">
            <Card>
              <Card.Body>
                <Card.Title className="mb-4">
                  <img src={iconWhy4} alt="" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-bold">
                  Sopir Profesional
                </Card.Subtitle>
                <Card.Text>
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WhyUs;
