import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MancaveDisplaysPage.css";
import { Link } from "react-router-dom";
import mancaveDisplaysIcon from "../../../media/mancaveDisplays/1.jpg";
import demo2 from "../../../media/mancaveDisplays/2.png";
import demo3 from "../../../media/mancaveDisplays/3.png";
import demo4 from "../../../media/mancaveDisplays/4.jpg";
import demo5 from "../../../media/mancaveDisplays/5.png";
import demo6 from "../../../media/mancaveDisplays/6.png";
import demo7 from "../../../media/mancaveDisplays/7.png";

class MancaveDisplaysPage extends Component {
  render() {
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Row>
          <Col
            xs={12}
            style={{
              marginTop: 50,
            }}
          >
            <img
              style={{ width: 300, height: 300 }}
              src={mancaveDisplaysIcon}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: 25, marginBottom: 25 }}>
          <Col
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#ffffff",
              fontSize: 25,
            }}
          >
            <a href="https://www.MANCAVEDISPLAYS.COM">
              www.MANCAVEDISPLAYS.COM
            </a>
          </Col>
        </Row>
        <Row style={{ marginTop: 25, marginBottom: 25 }}>
          <Col
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#ffffff",
              fontSize: 25,
            }}
          >
            I started messing around with an LED Panel in my spare time. Next
            thing i know I built a full backend to display sports scores with
            live betting odds.
            <ul
              style={{
                textAlign: "left",
                color: "#ffffff",
                fontSize: 25,
                marginLeft: "10%",
                marginRight: "10%",
                marginTop: 5,
              }}
            >
              <li>
                The backend is using NodeJS and the front end is using Python
              </li>
              <li>Runs on a Raspberry Pi</li>
              <li>When it turns on it automatically starts running.</li>
              <li>
                There is an accompaning website that users can use to update
                their own settings (built in React)
              </li>
              <li>
                The settings page lets each users ticker to display what they
                care about as well as their own custom messages.
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo2} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo3} />
          </Col>{" "}
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo4} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo6} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo5} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo7} />
          </Col>
        </Row>
        <h4 style={{ marginTop: 15, marginBottom: 50 }}>
          <Link to={"/portfolio"}>BACK</Link>
        </h4>
      </Container>
    );
  }
}

export default MancaveDisplaysPage;
