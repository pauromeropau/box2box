import React, { Component } from "react";
import "./News.css";
import ElMundo from './images/ElMundo.png'
import ElPais from './images/ElPais.png'
import CincoDias from './images/CincoDias.png'
import Expansion from './images/Expansion.png'
import ElReferente from './images/ElReferente.png'

class News extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="News">
          <h2 className="News-h1">Hablan de nosotros</h2>
          <div className="News-1">
            <img className="News-logo-1" src={ElMundo} alt="El Mundo"/>
          </div>
          <div className="News-2">
            <img className="News-logo-2" src={ElPais} alt="El País"/>
          </div>
          <div className="News-3">
            <img className="News-logo-3" src={CincoDias} alt="Cinco Días"/>
          </div>
          <div className="News-4">
            <img className="News-logo-4" src={Expansion} alt="Expansión"/>
          </div>
          <div className="News-5">
            <img className="News-logo-5" src={ElReferente} alt="El Referente"/>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default News;