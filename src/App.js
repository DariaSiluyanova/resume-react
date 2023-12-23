import React from "react";
import Index from "./components/Index";
import Portfolio from "./components/Portfolio";
import SideBar from "./components/SideBar";
import "./scss/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return ( 
    <Router>
      <main className="main-body">
        <SideBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Index/>
            </Route>
            <Route path="/portfolio">
              <Portfolio/>
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}