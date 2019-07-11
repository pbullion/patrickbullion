import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import golf from "../../media/links/golf.png";
import baseball from "../../media/links/baseball.png";
import spruce from "../../media/links/spruce.png";
import "./PortfolioPage.css";

const linkStyle = {
  width: 500,
  margin: 25
};

class PortfolioPage extends Component {
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
        }}
        fluid
      >
        <Row style={{ marginBottom: 30 }}>
          <h3 style={{ fontSize: 100 }}>Portfolio</h3>
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
            <Link to={"/spruce"}>
              <img style={linkStyle} src={spruce} />
            </Link>
            <Link to={"/golfPool"}>
              <img style={linkStyle} src={golf} />
            </Link>
            <Link to={"/baseballParlayPredictor"}>
              <img style={linkStyle} src={baseball} />
            </Link>
            <Link to={"/"} style={{fontSize: 30}}>BACK</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PortfolioPage;
