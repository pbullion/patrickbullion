import React, { Component } from "react";
import { Container } from "react-bootstrap";

class HomePage extends Component {
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
        <h1>Hellllooooo</h1>
      </Container>
    );
  }
}

export default HomePage;
