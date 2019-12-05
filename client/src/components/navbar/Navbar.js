import React, { Component } from "react";
import "./Navbar.css";
import { Switch, Route, Redirec, Link } from "react-router-dom";

import Home from "../Home/Home";
import HowItWorks from "../HowItWorks/HowItWorks";
import Plans from "../Plans/Plans";
import Business from "../Business/Business";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
          {/* <ul>
            <li>Inicio</li>
            <li>¿Cómo funciona?</li>
            <li>Tarifas</li>
          </ul> */}
          <Switch>
            <Route path="/home" component={Home}> </Route>
            <Route path="/howitworks"component={HowItWorks}></Route>
            <Route path="/plans" component={Plans}></Route>
            <Route path="/business" component={Business}></Route>
          </Switch>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Navbar;
