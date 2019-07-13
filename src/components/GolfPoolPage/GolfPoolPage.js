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
        <h1>
          <a href="http://www.golfapoolooza.com" style={{ color: "white" }}>
            www.GolfaPOOLooza.com
          </a>
        </h1>
        <h3>
          Under Construction. Quickly put this together in a few days for my
          buddy so he didnt have to manually email all 50 people in the pool, as
          well as manually input all the golfers scores 4 days in a row and have
          human error. Right now its just good for the British Open but after
          that I already have it set up to change for each upcoming tournament
          every week.
        </h3>
        <h6>
          <Link to={"/portfolio"}>BACK</Link>
        </h6>
      </Container>
    );
  }
}

export default GolfPoolPage;
