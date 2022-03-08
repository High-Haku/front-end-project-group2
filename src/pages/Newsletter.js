import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import useForm from 'react-hook-form';

//referensi https://stackoverflow.com/questions/41296668/reactjs-form-input-validation

function Newsletter(){
 const [useForm, inputEmail] = useForm;
 const emailSubmit = data => {
    console.log(data);
 };
    return(
        <div className="newsletter p-5 border-10" >
        <Container>
          <h2 className="text-center">Subscribe Newsletter</h2>
          <Form className="p-5" onSubmit={emailSubmit}>
          <Form.Group className="mb-3 "controlId="formBasicEmail">
  <Form.Control type="email" placeholder="Enter email" ref={inputEmail}/>
</Form.Group>
<Button className="justify-content-end" variant="primary" type="submit">
  Submit
</Button>
          </Form>
        </Container>

      </div>


    );
}

export default Newsletter;