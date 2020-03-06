import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./WeddingPage.css";
import { Link } from "react-router-dom";

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
              marginTop: 50
            }}
          >
            <a href="https://www.oneinabullion.com">
              <p
                style={{
                  fontSize: "2rem"
                }}
              >
                www.OneInABullion.com
              </p>
            </a>
          </Col>
          <Col xs={12}>
            <p>
              <a href={""} style={{ color: "#75ff5d", fontSize: "2rem" }}>
                Download Video Demo of the admin site
              </a>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: 50 }}>
          <Col
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#ffffff",
              fontSize: 25
            }}
          >
            Instead of paying a website and having to use their template and
            have their company name all over I decided to build our own wedding
            website. It has two different sites, a website for wedding guests,
            and an admin website for us and our families to use.
          </Col>
          <Col
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
              color: "#ffffff",
              fontSize: 25
            }}
          >
            <h3>Admin Site UI</h3>
            <h5>built in React</h5>
            <ul>
              <li>
                Main page is where all of the invitations are visible and
                sortable by family and friends etc.
              </li>
              <li>You can add and edit invitations on this page as well</li>
              <li>
                There is a totals page that gets numbers from the API and
                displays totals for each category
              </li>
              <li>
                The RSVP list page lists out all of the responses in order of
                most recently edited
              </li>
              <li>
                The RSVP search page lets us easily locate an invitation instead
                of looking through the long list
              </li>
              <li>
                The Timeline page was just something i threw together so we can
                see what needs to be done when and what we have coming up
              </li>
            </ul>
            <h3>Admin Site API</h3>
            <h5>built in Node.js w/ AWS RDS database</h5>
            <ul>
              <li>Created an RDS database in AWS</li>
              <li>Set up all of the API's to query the database</li>
              <li>
                Queries include: all invites, invites by side, invites by
                relation
              </li>
              <li>
                The API also handles adding new invites and editing all invites
                (including updating their RSVP status)
              </li>
            </ul>
            <h3>Wedding Site UI</h3>
            <h5>built in React</h5>
            <ul>
              <li>
                Just a simple site I made that really just is about displaying
                all of the information for our wedding and engagement party
              </li>
              <li>
                Made it responsive since most people are going to be viewing it
                from their phone
              </li>
            </ul>
          </Col>
        </Row>
        <h4 style={{ marginTop: 15, marginBottom: 50 }}>
          <Link to={"/portfolio"}>BACK</Link>
        </h4>{" "}
      </Container>
    );
  }
}

export default SprucePage;
