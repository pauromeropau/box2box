import React, { Component } from "react";
import "./HowItWorks.css";

class HowItWorks extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="HowItWorks">
          <section className="HowItWorks-1">
            <h1 className="HowItWorks-h1">Recogemos</h1>
            <p className="HowItWorks-p">Vamos a buscar tus cosas donde quieras, las protegemos para el transporte y nos las llevamos.</p>
          </section>
          <section className="HowItWorks-2">
            <h1 className="HowItWorks-h1">Guardamos</h1>
            <p className="HowItWorks-p">Cuidamos tus cosas. Nuestras instalaciones están vigiladas 24 horas al día. No tienes que preocuparte de nada.</p>
          </section>
          <section className="HowItWorks-3">
            <h1 className="HowItWorks-h1">Devolvemos</h1>
            <p className="HowItWorks-p">Te entregamos lo que necesites dónde y cuándo quieras. Sólo tienes que decírnoslo.</p>
          </section>
          <section className="HowItWorks-4">
            <h1 className="HowItWorks-h1">Así de simple.</h1>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default HowItWorks;