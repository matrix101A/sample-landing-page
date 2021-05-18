import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FillDetails from "./components/FillDetails";
import React, { useEffect } from "react";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import Tnc from "./components/Tnc";
function App() {
  useEffect(() => {});
  return (
    <Router>
      <Switch>
        {/* Like trational switch in programming  */}
        <Route exact path="/details">
          <FillDetails />
        </Route>
        <Route exact path="/tnc">
          <Tnc />
        </Route>
        <Route exact path="/profile">
          <HomePage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
