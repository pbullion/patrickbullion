import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import golf from "../../media/links/golf.png";
import baseball from "../../media/links/baseball.png";
import spruce from "../../media/links/spruce.png";
import wedding from "../../media/links/spruce.png";
import "./PortfolioPage.css";

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
          textAlign: "center",
        }}
        fluid
      >
        <Row style={{ marginBottom: 30 }}>
          <h3 className="title">Portfolio</h3>
        </Row>
        <Row>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={12}
          >
            <Link to={"/mancaveDisplays"}>
              <p
                style={{
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                Mancave Displays (LED Sports Tickers)
              </p>
            </Link>
            <Link to={"/betfolio"}>
              <p
                style={{
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                BetFolio App
              </p>
            </Link>
            <Link to={"/wedding"}>
              <p
                style={{
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                Wedding Site
              </p>
            </Link>
            <Link to={"/spruce"}>
              <p
                style={{
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                Spruce Barbershop App
              </p>
            </Link>
            <Link to={"/golfPool"}>
              <p
                style={{
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                Golf Fantasy Pool
              </p>
            </Link>
            <Link to={"/"} style={{ fontSize: 30 }}>
              BACK
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PortfolioPage;
