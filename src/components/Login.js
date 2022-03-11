import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Validation from "./validation";
import { Link, useNavigate } from "react-router-dom";
import login from "../img/login.svg";
import { useContext } from "react";
import { UserContext } from "../UserProvider";
import swal from '@sweetalert/with-react';

const Login = () => {
  const navigate = useNavigate();
  const {setIsLogin} = useContext(UserContext)

  const [userLogin, setUserLogin] = useState({
    username: null,
    password: null,
  });


  const [errors, setErrors] = useState({});


  const handleChange = (event) => {
    setUserLogin(() => ({
      ...userLogin,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataUser = JSON.parse(localStorage.getItem("user"));

    setErrors(Validation(userLogin));


    if (
      userLogin.username === dataUser.username &&
      userLogin.password === dataUser.password 
    ) {
      navigate("/profile");
      setIsLogin(true)
      localStorage.setItem('isLogin',true)
    } else {
      <>
        {swal(
          <div>
            <img src="/images/cat-animal.png"  height="250px" alt="" srcset="" />
            <h3 className="text-warning">Wrong Password Or Username</h3>
          </div>,
          {buttons: "Close"}
        ).then(() => {
          navigate("/login");
        })}
      </>
    }
  };

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
        <Col></Col>
        <Row>
          <Col lg={6}>
            <Form className="rounded p-4 p-sm-3">
              <h2 style={{ color: "black", textShadow: "1px 1px 2px grey" }}>
                Log In to Use Our Website
              </h2>
              <br />
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={userLogin.username}
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
                  value={userLogin.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="password">{errors.password}</p>
                )}
              </Form.Group>

              <Button
                className=""
                variant="warning"
                onClick={handleSubmit}
                style={{ color: "black", textShadow: "1px 1px 2px grey" }}
              >
                Log In
              </Button>
              <p
                className="d-flex justify-content-end"
                style={{ fontSize: 12 }}
              >
                Dont have an account? <Link to="/register">Register here</Link>
              </p>
            </Form>
          </Col>
          <Col lg={6} className="d-flex justify-content-end">
            <img
              src={login}
              width="350px"
              height="500px"
              className="rounded p-4 p-sm-3 "
              style={{}}
              alt="dont worry about it, its not important for this website usability, i know this is a long message, i just want to annoy people with screen reader"
            />
          </Col>
        </Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
