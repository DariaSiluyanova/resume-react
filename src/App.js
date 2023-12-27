import React from "react";
import Index from "./components/Index";
import Portfolio from "./components/Portfolio";
import SideBar from "./components/blocks/Sidebar/SideBar";
import "./scss/main.scss";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();
  return (
    <main className="main-body">
      <SideBar />
      <div className="content">
        <AnimatePresence mode="wait">
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Index />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </main>
  );
}
