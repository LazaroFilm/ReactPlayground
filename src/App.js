import React, { Component } from "react";
import {
  Jumbotron,
  Alert,
  Button,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Hello World!</h1>
        </Jumbotron>
        <Alert key="hello" variant="danger">
          TEST
        </Alert>
        <Form>
          <Form.Group controlId="yourAge">
            <Form.Label>What's your age?</Form.Label>
            <Form.control type="number" placeholder="from 0 to 99" />
          </Form.Group>
        </Form>
        <Row className="justify-content-xs-lg-center">
          <Col>
            <Button key="yo" variant="warning" size="lg">
              Yo!
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
