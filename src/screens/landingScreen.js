import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import '../style/landingScreen.css';

class LandingScreen extends Component {
  render() {
    return (
      <div>
        <Container className="addHeight">
          <Jumbotron>
            <h2 className="display-4">Country Info</h2>
          </Jumbotron>
          <Row className="addHeightRow">
            <Col xs="1" sm="4"></Col>
            <Col xs="10" sm="4">
              <InputGroup className="marginTopCenter">
                <Input placeholder="input country" />
                <InputGroupAddon addonType="prepend">
                  <Button color="primary">Search</Button>
                </InputGroupAddon>
              </InputGroup>
              <Button className="marginTopCenter" color="primary">
                List of Countrys
              </Button>
            </Col>
            <Col xs="1" sm="4"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LandingScreen;
