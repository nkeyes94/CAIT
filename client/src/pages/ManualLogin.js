import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Button from "../components/Button";

class ManualLogin extends Component {


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Link to="/"><Button>Home</Button></Link>
          </Col>

          <Col size="md-6">
            <h1>Sign In Manually</h1>
            <form>
              <Input name="email" placeholder="Email (required)" />
              <Input name="password" placeholder="Password (required)" />
              <FormBtn>Login</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default ManualLogin;