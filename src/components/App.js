import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Background from "./Background/Background";
import GolfPoolPage from "./Portfolio/GolfPoolPage/GolfPoolPage";
import BaseballParlayPredictor from "./Portfolio/BaseballParlayPredictorPage/BaseballParlayPredictor";
import SprucePage from "./Portfolio/SprucePage/SprucePage";
import WeddingPage from "./Portfolio/WeddingPage/WeddingPage";
import PortfolioPage from "./PortfolioPage/PortfolioPage";
import BetFolioPage from "./Portfolio/BetFolioPage/BetFolioPage";
import MancaveDisplaysPage from "./Portfolio/MancaveDisplaysPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Background />
        <HashRouter>
          <Route path="/" exact component={HomePage} />
          <Route path="/golfPool" exact component={GolfPoolPage} />
          <Route
            path="/baseballParlayPredictor"
            exact
            component={BaseballParlayPredictor}
          />
          <Route path="/spruce" exact component={SprucePage} />
          <Route path="/betfolio" exact component={BetFolioPage} />
          <Route path="/wedding" exact component={WeddingPage} />
          <Route path="/portfolio" exact component={PortfolioPage} />
          <Route
            path="/mancaveDisplays"
            exact
            component={MancaveDisplaysPage}
          />
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
