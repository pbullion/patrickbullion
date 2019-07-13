import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class BaseballParlayPredictor extends Component {
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
      >
        <h1>
          <a href="http://www.parlaymeplease.com" style={{ color: "white" }}>
            www.parlaymeplease.com
          </a>
        </h1>
        <h3>
          Under Construction. Been working on this off and on for a few weeks.
          Most is on the backend getting all the data and sorting/combing stats.
          So far im 17 for 20 picking baseball games.
        </h3>
        <h6>
          <Link to={"/portfolio"}>BACK</Link>
        </h6>
      </Container>
    );
  }
}

export default BaseballParlayPredictor;
