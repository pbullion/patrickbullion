import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import github from "../../media/links/github.png";
import linkedin from "../../media/links/linkedin.png";
import portfolio from "../../media/links/portfolio.png";
import resume from "../../media/links/resume.png";
import "./HomePage.css";

const linkStyle = {
  width: 500,
  margin: 25
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
          height: "100vh",
          color: "#ffffff"
        }}
        fluid
      >
        <Row>
          <h1 style={{ fontSize: 100 }}>Patrick Bullion</h1>
        </Row>
        <Row style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 50 }}>Software Developer</h3>
        </Row>
        <Row>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
            xs={12}
          >
            <a href="https://github.com/pbullion">
              <img style={linkStyle} src={github} />
            </a>
            <Link to={"/portfolio"}>
              <img style={linkStyle} src={portfolio} />
            </Link>
            <a href="https://s3-us-west-2.amazonaws.com/patrickbullion.com/resume/patrick_bullion_resume.pdf">
              <img style={linkStyle} src={resume} />
            </a>
            <a href="https://www.linkedin.com/in/patrickbullion">
              <img style={linkStyle} src={linkedin} />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
