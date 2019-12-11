import React, { Component } from "react";
import "./Plans.css";

class Plans extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="Plans">
          <div className="Plans-1">
            <h2 className="Plans-h2">Tenemos el mejor plan para tí.</h2>
            <p className="Plans-p">Paga solo por el espacio que necesitas. Desde 1m2.</p>
          </div>
          <section className="Plans-2">
            <div className="Plans-small">
              <h1 className="Plans-h1">Planes pequeños</h1>
              <p className="Plans-p">Hasta 3m2</p>
            </div>
          </section>
          <section className="Plans-3">
            <div className="Plans-medium">
              <h1 className="Plans-h1">Planes medianos</h1>
              <p className="Plans-p">Hasta 6m2.</p>
            </div>
          </section>
          <section className="Plans-4">
            <div className="Plans-big">
              <h1 className="Plans-h1">Planes grandes</h1>
              <p className="Plans-p">Más de 6m2.</p>
            </div>
          </section>
          <section className="Plans-5">
            <div className="Plans-business">
              <h1 className="Plans-h1">Plan empresas</h1>
              <p className="Plans-p">A tu medida</p>
            </div>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default Plans;