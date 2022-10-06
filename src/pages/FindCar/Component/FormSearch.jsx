import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormSearch.css";

const FormSearch = () => {
  return (
    <>
      <Container className="search-section py-4 px-3 rounded-3">
        <Form>
          <Row className="d-flex justify-content-center">
            <Col lg="2" className="mb-3">
              <Form.Group controlId="namaMobil">
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control type="text" placeholder="Ketik nama/tipe mobil" />
              </Form.Group>
            </Col>
            <Col lg="2" className="mb-3">
              <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <Form.Select placeholder="Masukan Kapasitas Mobil">
                  <option>2 - 4 Orang</option>
                  <option>4 - 6 Orang</option>
                  <option>6 - 8 Orang</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg="2" className="mb-3">
              <Form.Group>
                <Form.Label>Harga</Form.Label>
                <Form.Select placeholder="Masukan Harga Sewa per Hari">
                  <option>&lt; Rp. 400.000</option>
                  <option>Rp. 400.000 - Rp. 600.000</option>
                  <option>&gt; Rp. 600.000</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg="2" className="mb-3">
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select>
                  <option>Disewa</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg="2">
              <Button
                type="submit"
                className="text-white fw-semibold btn-cari px-4 py-2"
              >
                Cari Mobil
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default FormSearch;
