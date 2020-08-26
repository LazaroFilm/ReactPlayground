import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import { Jumbotron, Alert, Button, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Jumbotron>
        <h1>Hello World!</h1>
      </Jumbotron>
      <Alert key="hello" variant="danger">
        TEST
      </Alert>
      <form></form>
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

export default App;
