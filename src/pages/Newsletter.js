import { Component } from "react";
import React from "react";
import { Container, Navbar, Nav, Row, Col, Button, CardGroup, Card, Form, } from "react-bootstrap";

class Newsletter extends Component {
constructor(props){
    super(props);
    this.state={
        email:'',
    },
};
this.handleChange = this.handleChange.bind(this);
}

validateEmail(e) {
    const emailRex -  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const {validate} = this.state;
if (emailRex.test(e.target.value)) {
    validate.emailState = 'has-success';
  } else {
    validate.emailState = 'has-danger';
  }

  this.setState({ validate });
}

submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
  }

    render(){
        const {email} = this.state;
        return(
        <div className="newsletter p-5 border-10">
        <Container>
          <h2 className="text-center">Subscribe Newsletter</h2>
          <Form className="form p-5" onSubmit={(e) => this.submitForm(e)} >
          <Form.Group valid={this.state.validate.emailState === "has-success"}
              invalid={this.state.validate.emailState === "has-danger"}
              value={email}
              onChange={(e) => {
                this.validateEmail(e);
                this.handleChange(e); className="mb-3 "controlId="formBasicEmail">
  <Form.Control className="email" type="email" placeholder="Enter email"/>
</Form.Group>
<Button className="justify-content-end" variant="primary" type="submit">
  Submit
</Button>
          </Form>
        </Container>

      </div>
        );
    }
}

export default Newsletter;