import React from "react";
import profile from "../img/profile.svg";
import { Col, Container, Row, Button } from "react-bootstrap";

function Profile() {
  const dataUser = JSON.parse(localStorage.getItem("user"));
  const username = dataUser.username;
  const email = dataUser.email;

  return (
    <Container fluid id="body" style={{ minHeight: "100vh" }}>
      <Row>
        <Col lg={12} className="d-flex justify-content-center p-2">
          <img
            src={profile}
            width="400px"
            className="rounded-circle border border-warning"
          />
        </Col>
        <Col>
          <Row className="p-5">
            <Col
              lg={3}
              className="text-center p-2"
              style={{ borderStyle: "groove", borderColor: "#d8562e",color: "black", textShadow: "1px 1px 2px grey"}}
            >
              <h2>{username}</h2>
              <h2>{email}</h2>
              <Button
                variant="warning"
                style={{ color: "black", textShadow: "1px 1px 2px grey" }}
              >
                Ubah Profil Kamu
              </Button>
            </Col>
            <Col lg={1}></Col>
            <Col
              lg={8}
              className="text-center p-2"
              style={{ borderStyle: "groove", borderColor: "#d8562e", color: "black", textShadow: "1px 1px 2px grey" }}
            >
              <h3>History</h3>
              <Row>
                <Col>Nama Barang dan harga</Col>
                <Col>Picture</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
