import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SprucePage.css";

class SprucePage extends Component {
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
          textAlign: "center"
        }}
      >
        <Row>
          <Col
            xs={12}
            style={{
              marginBottom: 50,
              marginTop: 50
            }}
          >
            <h1
              style={{
                fontSize: 75,
                color: "#ffffff"
              }}
            >
              Spruce Barbershop App
            </h1>
          </Col>
          <Col xs={12}>
            <h1>
              <a
                href={
                  "https://s3-us-west-2.amazonaws.com/patrickbullion.com/spruce/spruceApp.MOV"
                }
                style={{ fontSize: 50, color: "#75ff5d" }}
              >
                Video Demo of App
              </a>
            </h1>
          </Col>
        </Row>
        <Row style={{ marginTop: 50 }}>
          <Col
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#ffffff",
              fontSize: 20
            }}
          >
            Was contracted to build an app for the barbershop that would allow
            customers to be able to join a wait list from their phone, as well
            as see the current wait times for each barber/stylist. There is also
            an iPad version that is for the in store sign up where users do not
            have to create an account. Also, customers can see approximately how
            much longer till it is their turn.
          </Col>
          <Col
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
              color: "#ffffff",
              fontSize: 20
            }}
          >
            • The front end is built using React Native.
            <br />
            • I used an AWS RDS database for storing user info, employees
            schedules and the wait list
            <br />
            • Users can login using their Google or Facebook account and the app
            receives all of their info
            <br />• Everything is populated in the app using a NodeJS backend
            that pulls all of the info from the database to allow for updating
            of the app directly, instead of having to submit updates to the App
            Store.
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SprucePage;
