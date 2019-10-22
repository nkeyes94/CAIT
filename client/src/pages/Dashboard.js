import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Button from "../components/Button";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
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

            <Col size="md-12 d-flex">
              <div className="d-flex justify-content-center m-3">
                <form className="">
                  <Input name="email" placeholder="Search words here" />
                </form>
              </div>

            </Col>
          </Row>

          <Row>
            <div className="mx-auto p-4">
              <Col size="md-12">
                <Link className="btn btn-success" to="/">Home</Link>
              </Col>
            </div>
          </Row>

        </Container>
      </div>
    );
  }

}
export default Dashboard;
