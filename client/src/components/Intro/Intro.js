import React, { Component } from "react";
import "./Intro.css";
import boxes from "./boxes.svg";

class Zip extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="Intro">
          <section className="Intro-left">
            <header className="Intro-header">Tu trastero sin levantarte del sofá.</header>
            <h1 className="Intro-h1">
              Recogemos lo que quieras guardar y te lo devolvemos cuando lo
              necesites.
            </h1>
            <div className="Intro-right">
              <img className="Boxes-Image" src={boxes} alt="Boxes" />
            </div>
            <div className="ZIPform-container">
              <input type="text" placeholder="Código Postal" className="ZIPform" />
              <button className="ZIPform-button">COMENZAR</button>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Zip;
