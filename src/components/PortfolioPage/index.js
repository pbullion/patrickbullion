import React from "react";
import PortfolioPage from "./PortfolioPage";
import { MyContext } from "../../contexts/MyContext";

export default () => (
  <MyContext.Consumer>{() => <PortfolioPage />}</MyContext.Consumer>
);
