import React from "react";
import WeddingPage from "./WeddingPage";
import { MyContext } from "../../contexts/MyContext";

export default () => (
  <MyContext.Consumer>{() => <WeddingPage />}</MyContext.Consumer>
);
