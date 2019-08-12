import React from "react";
import SprucePage from "./SprucePage";
import { MyContext } from "../../contexts/MyContext";

export default () => (
  <MyContext.Consumer>{() => <SprucePage />}</MyContext.Consumer>
);
