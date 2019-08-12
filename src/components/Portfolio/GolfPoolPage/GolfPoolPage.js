import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import schedule from "./images/schedule.png";
import leaderboard from "./images/leaderboard.png";
import selection from "./images/selection.png";
import "./GolfPoolPage.css";

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
          color: "#ffffff",
          fontSize: 20,
          paddingTop: 50
        }}
      >
        <h3>
          <a href="http://www.golfapoolooza.com" style={{ color: "white" }}>
            www.GolfaPOOLooza.com
          </a>
        </h3>
        <h4 style={{ marginTop: 15, marginBottom: 25 }}>
          <ul>
            <li>ReactJS Front End</li>
            <li>NodeJS Back End</li>
            <li>The backend pulls its data from SportsRadar Golf Api's</li>
          </ul>
          Under Construction. Quickly put this together in a few days for my
          buddy so he didnt have to manually email all 50 people in the pool, as
          well as manually input all the golfers scores 4 days in a row and have
          human error. Right now it's just good for the British Open but after
          that I already have it set up to change for each upcoming tournament
          every week.
        </h4>
        <h5 style={{ marginTop: 15, marginBottom: 25 }}>
          <ul>
            <li>
              The home page displays the overall rules and lists all of the
              remaining PGA Tour events
            </li>
            <li>
              Sign Up is only active whenever it is the Monday before the event
              and then gets disabled again the day the tournament starts
            </li>
            <li>
              The Leaderboard is active the Monday before Tournament starts and
              then from then on
            </li>
          </ul>
        </h5>
        <img src={schedule} />
        <h5 style={{ marginTop: 15, marginBottom: 25 }}>
          <ul>
            <li>
              On this page I pull in the World Golf Rankings, then pull in the
              field for this specific tournament
            </li>
            <li>
              Then the golfers get put in the correct tier according to our
              rules
            </li>
          </ul>
        </h5>
        <img src={selection} />
        <h5 style={{ marginTop: 15, marginBottom: 25 }}>
          <ul>
            <li>
              This page displays the overall leaderboard for every person who
              entered
            </li>
            <li>
              It also does all of the math and sorts the leaderboard in order
            </li>
          </ul>
        </h5>
        <img src={leaderboard} />
        <h4 style={{ marginTop: 15, marginBottom: 50 }}>
          <Link to={"/portfolio"}>BACK</Link>
        </h4>
      </Container>
    );
  }
}

export default GolfPoolPage;
