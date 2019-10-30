import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import "./Dashboard.css"
import { Helmet } from 'react-helmet';



class Dashboard extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <script src="/js/voiceRecognition.js"></script>
          <script defer language="javascript" src="js/creative_coding.js"></script>
          <script defer language="javascript" src="js/canvas.js"></script>
          <script defer language="javascript" src="js/mic.js"></script>
          <script defer language="javascript" src="js/testLay.js"></script>
          <script src="https://kit.fontawesome.com/e297286cae.js" crossorigin="anonymous"></script>
          <script language="javascript" crossorigin src="js/draw.js"></script>
          <script Access-Control-Allow-Origin="*" src="https://code.responsivevoice.org/responsivevoice.js?key=A2zNMwFx"></script>
        </Helmet>
        <Container fluid>
          <Jumbotron />
          <div id="voiceJumbo" className="jumbotron" />

          <Row>
            <div className="mx-auto p-4">
              <Col size="md-12">
                <button id="thisButton" className="btn btn-success" to="/"><i id="micIcon" className="fas fa-microphone-alt fa-4x"></i></button>
              </Col>
            </div>
          </Row>

        </Container>
      </div>
    );
  }

}
export default Dashboard;
