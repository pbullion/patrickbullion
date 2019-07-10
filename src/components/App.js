import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Background from "./Background/Background";
import GolfPoolPage from "./GolfPoolPage/GolfPoolPage";
import BaseballParlayPredictor from "./BaseballParlayPredictorPage/BaseballParlayPredictor";
import SprucePage from "./SprucePage/SprucePage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Background />
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/golfPool" exact component={GolfPoolPage} />
          <Route path="/baseballParlayPredictor" exact component={BaseballParlayPredictor} />
          <Route path="/spruce" exact component={SprucePage} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
