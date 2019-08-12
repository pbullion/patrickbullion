import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Background from "./Background/Background";
import GolfPoolPage from "./Portfolio/GolfPoolPage/GolfPoolPage";
import BaseballParlayPredictor from "./Portfolio/BaseballParlayPredictorPage/BaseballParlayPredictor";
import SprucePage from "./Portfolio/SprucePage/SprucePage";
import PortfolioPage from "./PortfolioPage/PortfolioPage";

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
          <Route path="/portfolio" exact component={PortfolioPage} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
