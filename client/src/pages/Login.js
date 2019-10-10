// import Video from "../components/Video";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import ReactPlayer from 'react-player'

class Login extends Component {

  
  render() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-12">     
            <Link to="/"><Button>Home</Button></Link>
          </Col>
        
          <Col size="md-12">
            <h1>C.A.I.T</h1>
            <h2>Companion Artificial Intelligence Technology</h2>
          </Col>
       
          <Col size="md-12">
            <h3>Facial Recognition Biometric Login</h3>
          </Col>
        
          <Col size="md-12">
            <Button>Allow Camera Access</Button>
          </Col>
        
          <Col size="md-12">
            <ReactPlayer className ="border border-success">
            </ReactPlayer>
          </Col>
        
          <Col size="md-12">      
            <Link to="/manualLogin"><Button>Manual Login</Button></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
}

export default Login;
