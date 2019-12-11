import React, { Component } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import HowItWorks from "../HowItWorks/HowItWorks";
import Plans from "../Plans/Plans";
import Reviews from "../Reviews/Reviews";
import News from "../News/News";
import Footer from "../Footer/Footer";
import Copyright from "../Copyright/Copyright";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Intro/>
        <HowItWorks/>
        <Plans/>
        <Reviews/>
        <News/>
        <Footer/>
        <Copyright/>
      </React.Fragment>
    );
  }
}

export default Home;