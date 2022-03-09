import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Validation from "./validation";
import { useNavigate } from "react-router-dom";
import register from "../img/register.svg";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUser(() => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(Validation(user));
  };

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      user.email &&
      user.password &&
      user.username
    ) {
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/login");
    }
  }, [errors]);

  return (
    <Container
      fluid
      id="body"
      className=" d-flex justify-content-center align-items-center p-5"
      style={{
        minHeight: "100vh",
        color: "black", textShadow: "1px 1px 2px grey"
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col lg={6}>
              <img
                src={register}
                width="350px"
                height="500px"
                className="rounded p-4 p-sm-3 "
                alt="dont worry about it, its not important for this website usability, i know this is a long message, i just want to annoy people with screen reader"
              />
            </Col>
            <Col lg={6}>
              <Form className="rounded p-4 p-sm-3">
                <h2 style={{ color: "black", textShadow: "1px 1px 2px grey" }}>
                  Register Your Account
                </h2>
                <br />
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter Email Adress"
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder="Enter Your Username"
                  />
                  {errors.username && (
                    <p className="username">{errors.username}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="password">{errors.password}</p>
                  )}
                </Form.Group>

                <Button
                  variant="warning"
                  onClick={handleSubmit}
                  style={{ color: "black", textShadow: "1px 1px 2px grey" }}
                >
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
