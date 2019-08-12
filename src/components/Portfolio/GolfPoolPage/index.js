import React from "react";
import GolfPoolPage from "./GolfPoolPage";
import { MyContext } from "../../contexts/MyContext";

export default () => (
  <MyContext.Consumer>{() => <GolfPoolPage />}</MyContext.Consumer>
);
