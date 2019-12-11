import React, { Component } from "react";
import "./HowItWorks.css";

class HowItWorks extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="HowItWorks">
          <section>
            <h1>Recogemos</h1>
            <p>Vamos a buscar tus cosas donde quieras, las protegemos para el transporte y nos las llevamos.</p>
          </section>
          <section>
            <h1>Guardamos</h1>
            <p>Cuidamos tus cosas. Nuestras instalaciones están vigiladas 24 horas al día. No tienes que preocuparte de nada.</p>
          </section>
          <section>
            <h1>Devolvemos</h1>
            <p>Te entregamos lo que necesites dónde y cuándo quieras. Sólo tienes que decírnoslo.</p>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default HowItWorks;