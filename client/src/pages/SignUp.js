import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Button from "../components/Button";

class SignUp extends Component {

  
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">     
            <Link to="/"><Button>Home</Button></Link>
          </Col>
     
          <Col size="md-6">
            <h1>Sign Up</h1>
            <form>
              <Input name="first-name" placeholder="First Name (required)" />
              <Input name="last-name" placeholder="Last Name (required)" />
              <Input name="email" placeholder="Email (required)" />
              <Input name="password" placeholder="Password (required)" />
              <Input name="confirm-password" placeholder="Confirm Password (required)" />
              <FormBtn>Register</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
  
  
export default SignUp;
