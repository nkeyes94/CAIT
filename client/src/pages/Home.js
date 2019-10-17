import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import KateCard from "../components/KateCard";
import Wrapper from "../components/Wrapper";
import { Col, Row, Container } from "../components/Grid";
import homeCards from "../homeCards.json";

class Home extends Component {

  state = {
    homeCards
  }
  
  render () {
    return (
      <div>
      <Container fluid>

        <Row>     
            {this.state.homeCards.map(homeCard => (
            <Col size="md-3">
              <KateCard
                id={homeCard.id} 
                name={homeCard.name}
                image={homeCard.image}
              />
            </Col>
            ))}
            <Col size="md-12">
            <div className="d-flex justify-content-center m-3">
                <h6>Companion Artificial Intelligence Technology</h6>   
            </div>
            </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div className="d-flex justify-content-center">
                <Link to="/login"><a href="#" class="text-danger mt-3">Login</a></Link>   
            </div>
          </Col>
          <Col size="md-12">
            <div className="d-flex justify-content-center">
                <Link to="/signup"><a href="#" className="text-danger mb-3">Sign Up</a></Link> 
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
              <div className="d-flex justify-content-center my-3">
              <a href="#" className="text-secondary pr-2"> Nathan Keyes </a> |
              <a href="#" className="text-secondary px-2"> Frederick Carnes </a> |
              <a href="#" className="text-secondary px-2"> Jessica Hunt </a> |
              <a href="#" className="text-secondary pl-2"> Mark Warness </a> 
              </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

}
export default Home;
