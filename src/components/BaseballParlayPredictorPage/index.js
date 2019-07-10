import React from "react";
import BaseballParlayPredictor from "./BaseballParlayPredictor";
import { MyContext } from "../../contexts/MyContext";

export default () => (
  <MyContext.Consumer>{() => <BaseballParlayPredictor />}</MyContext.Consumer>
);
