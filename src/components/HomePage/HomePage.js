import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.css";

const style = {
  width: 400,
  height: 200,
  border: "1px solid #3ca82d",
  backgroundColor: "#3ca82d",
  borderRadius: "2%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 50,
  fontSize: 25,
  color: "white"
};

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
        <Row>
          <h1 style={{ fontSize: 100 }}>Patrick Bullion</h1>
        </Row>
        <Row>
          <h3 style={{ fontSize: 50 }}>Software Developer</h3>
        </Row>
        <Row>
          <a style={style} href="https://github.com/pbullion">
            GITHUB
          </a>
          <a style={style} href="https://www.linkedin.com/in/patrickbullion">
            LINKEDIN
          </a>
          <a
            style={style}
            href="https://s3-us-west-2.amazonaws.com/patrickbullion.com/resume/patrick_bullion_resume.pdf"
          >
            RESUME
          </a>
        </Row>
        <Row>
          <Link style={style} to={"/golfPool"}>
            GOLF POOL
          </Link>
          <Link style={style} to={"/spruce"}>
            SPRUCE BARBERSHOP APP
          </Link>
          <Link style={style} to={"/baseballParlayPredictor"}>
            BASEBALL PARLAY PREDICTOR
          </Link>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
