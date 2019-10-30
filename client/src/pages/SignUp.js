import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input } from "../components/Form";
import Button from "../components/Button";
import Jumbotron from "../components/Jumbotron";
import FaceVideo from "../components/FaceVideo"
import { Helmet } from "react-helmet"

import { validateRegister } from '../utils'


class SignUp extends Component {
  
  state = {}
  
  handleInput = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const validation = validateRegister(this.state)
    if (!validation.isValid) {
      alert(validation.message)
      return
    }
    this.props.signUpUser(this.state)
  }

  render() {
    return (
      <div>
        <Helmet>
          <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"/>
          <script src="/js/face-api.js"/>
          <script type="text/javascript" src="js/faceRecognition.js"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"/>
        </Helmet>
        <Container fluid>
          <Jumbotron />

          <Row>
            <div className="mx-auto pb-5">
              <Col size="md-12">
                <Link className="btn btn-success" to="/">Home</Link>
              </Col>
            </div>
          </Row>

          <Row>
            <Col size="md-6">
              <div>
                <Row>
                  <Col size="md-12">
                    <h3 className="text-center">Sign Up</h3>
                  </Col>
                  <div className="mx-auto pt-5 pb-4">
                    <Col size="md-12" className="mt-5">
                      <form onSubmit={this.handleSubmit}>
                        <Input name="firstName" onChange={this.handleInput} placeholder="First Name (required)" />
                        <Input name="lastName" onChange={this.handleInput} placeholder="Last Name (required)" />
                        <Input name="email" onChange={this.handleInput} placeholder="Email (required)" />
                        <Input name="password" type='password' onChange={this.handleInput} placeholder="Password (required)" />
                        <Input name="confirmPassword" type='password' onChange={this.handleInput}placeholder="Confirm Password (required)" />

                        <Row>
                          <div className="mx-auto p-4">
                            <Col size="md-12">
                              <input className="btn btn-success" type='submit' name='submit' value='Register'/>
                            </Col>
                          </div>
                        </Row>

                      </form>
                    </Col>
                  </div>
                </Row>
              </div>

            </Col>

            <Col size="md-6">
              <div className="">
                <Row>
                  <Col size="md-12">
                    <h3 className="text-center">Biometric Sign Up</h3>
                  </Col>
                  <div className="mx-auto pt-3 pb-4">
                    <Col size="md-12">
                      <Button>Allow Camera Access</Button>
                    </Col>
                  </div>
                  <Col size="md-12">
                    <FaceVideo/>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default SignUp;
