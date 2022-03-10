import React from "react";
import profile from "../img/profile.svg";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const dataUser = JSON.parse(localStorage.getItem("user"));
  const dataTrans = JSON.parse(localStorage.getItem("transaction"));
  const isLogin = JSON.parse(localStorage.getItem("isLogin"))
  const navigate = useNavigate()
  
  const username = dataUser.username;
  const email = dataUser.email;
  // const namaBarang = dataTrans.title;
  // const qtyBarang = dataTrans.qty;
  // const hargaBarang = dataTrans.price;
  // const picBarang = dataTrans.image;

  const handleClick = () => {
    localStorage.setItem("isLogin",false);
    localStorage.setItem("user","")
    navigate('/')
  }

  return (
    <Container fluid id="body" style={{ minHeight: "100vh" }}>
      <Row>
        <Col lg={12} className="d-flex justify-content-center p-2">
          <img
            src={profile}
            width="300px"
            className="rounded-circle border border-warning"
          />
        </Col>
        <Col>
          <Row className="p-5">
            <Col
              lg={3}
              className="text-center p-2"
              style={{
                borderStyle: "groove",
                borderColor: "#d8562e",
                color: "black",
                textShadow: "1px 1px 2px grey",
              }}
            >
              <h2>{username}</h2>
              <h2>{email}</h2>
              <Button onClick={handleClick}
                variant="warning"
                style={{ color: "black", textShadow: "1px 1px 2px grey" }}
              >
                Log Out
              </Button>
            </Col>
            <Col lg={1}></Col>
            <Col
              lg={8}
              className="text-center p-2"
              style={{
                borderStyle: "groove",
                borderColor: "#d8562e",
                color: "black",
                textShadow: "1px 1px 2px grey",
              }}
            >
              <h3>History</h3>
              <Row>
                <Col>
                  <h2></h2>
                </Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
