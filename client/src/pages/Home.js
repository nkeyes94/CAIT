import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
class Home extends Component {

  
  
  render () {
    return (
      <div>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1>C.A.I.T</h1>
            <h2>Companion Artificial Intelligence Technology</h2>
          </Col>
       
          <Col size="md-12">
            <h3>Login or Sign Up!</h3>
          </Col>
        
          <Col size="md-12">
            <Link to="/login"><Button>Login</Button></Link>
          </Col>
          
          <Col size="md-12">     
            <Link to="/signup"><Button>SignUp</Button></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

}
export default Home;
