import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Background from "./Background/Background";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Background />
        <Router>
          <Route path="/" exact component={HomePage} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
