import * as ReactDOM from "react-dom";
import * as React from "react";
import { Route, Router } from "react-router-dom";

import "./styles/App.css";

import history from "./utils/history";
import App from "./components/App";

const mainRoutes = (
  <Router history={history}>
    <Route path="/" render={(props) => <App />} />
  </Router>
);

ReactDOM.render(mainRoutes, document.getElementById("root"));
