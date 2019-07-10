import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          height: "100vh",
          color: "#ffffff",
          fontSize: 20
        }}
        fluid
      >
        <h1>Coming Soon...</h1>
        <Link to={"/"}>BACK</Link>
      </Container>
    );
  }
}

export default GolfPoolPage;
