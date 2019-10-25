import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Button from "../components/Button";
import Jumbotron from "../components/Jumbotron";
// import { Input, FormBtn } from "../components/Form";
// import { Link } from "react-router-dom";
// import VoiceBackground from "../components/VoiceBackground";
import { Col, Row, Container } from "../components/Grid";
// import audioImg from "../audioImg.json";
import "./Dashboard.css"


class Dashboard extends Component {

  render() {
    return (

      <div>
        <Container fluid>
          <Jumbotron />
          <div id="voiceJumbo" className="jumbotron" />

          <Row>
            <div className="mx-auto p-4">
              <Col size="md-12">
                <button id="thisButton" className="btn btn-success" to="/">Click And Speak Your Command</button>
              </Col>
            </div>
          </Row>

        </Container>
      </div>
    );
  }

}
export default Dashboard;
