import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class GolfPoolPage extends Component {
  state = {};

  componentWillMount() {}

  render() {
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh"
        }}
        fluid
      >
      </Container>
    );
  }
}

export default GolfPoolPage;
