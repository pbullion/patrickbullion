import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BaseballParlayPredictor.css";
import teamList from "./images/teamList.png";
import comboList from "./images/comboList.png";

class BaseballParlayPredictor extends Component {
  state = {};

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
        <h1>
          <a href="http://www.parlaymeplease.com" style={{ color: "white", marginBottom: 15 }}>
            www.parlaymeplease.com
          </a>
        </h1>
        <h1>
          <a href="http://www.parlaymeplease.com/results" style={{ color: "white", marginBottom: 15 }}>
            CLICK HERE FOR UP TO DATE RESULTS
          </a>
        </h1>
        <h4 style={{ marginTop: 15, marginBottom: 25 }}>
          <ul>
            <li>
              The backend API connects to a sports API that I found online
            </li>
            <li>
              It finds todays schedule of games then uses each teams ID to find their current records.
            </li>
            <li>Once it has the schedule and records, it then finds the lineup for each team and gets the starting pitcher. Once the starting pitcher is there I use the pitcher ID to get his stats.
            </li>
            <li>After all of that, I assign point values for the teams records and the pitchers records.
            </li>
            <li>Once I have the total for each team, I calculate the difference.
            </li>
            <li>FINALLY, once I have the differences if the total difference is >10 that row turns green and the higher team name is in bold
            </li>
          </ul>
        </h4>
        <img className="team" src={teamList} />
        <h4 style={{ marginTop: 15, marginBottom: 25 }}>
          <ul>
            <li>I also take the top four teams and put them into a function that returns all of the different combinations so that I can then bet many different ways to hedge my bets incase 1 or 2 teams lose
            </li>
            <li>Sometimes there might only be 2 teams in the green, so far the best outcomes for atleast getting some money if a team loses is the four team days.
            </li>
          </ul>
        </h4>
        <img className="combos" src={comboList} />
        <h1>
          <Link to={"/portfolio"}>BACK</Link>
        </h1>
      </Container>
    );
  }
}

export default BaseballParlayPredictor;
