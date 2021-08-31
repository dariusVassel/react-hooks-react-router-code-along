import React from "react";
import ReactDOM from "react-dom";
import { BrowserRoute, BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import App from "./App"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"));
