import React, { Component } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import HowItWorks from "../HowItWorks/HowItWorks";
import Plans from "../Plans/Plans";
import Reviews from "../Reviews/Reviews";
import News from "../News/News";
import Footer from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Intro className="Intro"/>
        <HowItWorks className="HowItWorks"/>
        <Plans className="Plans"/>
        <Reviews className="Reviews"/>
        <News className="News"/>
        <Footer className="Footer"/>
      </React.Fragment>
    );
  }
}

export default Home;