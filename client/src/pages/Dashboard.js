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
          <script src="/js/voiceRecognition.js"/>
          <script defer language="javascript" src="js/creative_coding.js"/>
          <script defer language="javascript" src="js/canvas.js"/>
          <script defer language="javascript" src="js/mic.js"/>
          <script defer language="javascript" src="js/testLay.js"/>
          <script src="https://kit.fontawesome.com/e297286cae.js" crossorigin="anonymous"/>
          <script language="javascript" crossorigin src="js/draw.js"/>
          <script Access-Control-Allow-Origin="*" src="https://code.responsivevoice.org/responsivevoice.js?key=A2zNMwFx"/>
        </Helmet>
        <Container fluid>
          <Jumbotron />
          <div id="voiceJumbo" className="jumbotron" />

          <Row>
            <div className="mx-auto p-4">
              <Col size="md-12">
                <button id="thisButton" className="btn btn-success" to="/"><i id="micIcon" className="fas fa-microphone-alt fa-4x"/></button>
              </Col>
            </div>
          </Row>

        </Container>
      </div>
    );
  }

}
export default Dashboard;
