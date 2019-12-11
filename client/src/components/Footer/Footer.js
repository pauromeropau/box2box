import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="Footer">
          <section className="Footer-1">
            <div className="Contact">
              <h1 className="Contact-h1">Contacta</h1>
              <p className="Contact-phone">600 27 73 30</p>
              <p className="Contact-email">contacto@box2box.es</p>
              <p className="Contact-adress">Calle de Ríos Rosas, 36, 28003, Madrid</p>
            </div>
          </section>
          <section className="Footer-2">
            <div className="Cities">
              <h1 className="Cities-h1">España</h1>
              <p className="Cities-p">Madrid</p>
              <p className="Cities-p">Barcelona</p>
              <p className="Cities-p">Valencia</p>
              <p className="Cities-p">Málaga</p>
              <h1 className="Cities-h1">Portugal</h1>
              <p className="Cities-p">Lisboa</p>
              <h1 className="Cities-h1">Francia</h1>
              <p className="Cities-p">París</p>
              <h1 className="Cities-h1">Próximas aperturas</h1>
              <p className="Cities-p">Londres</p>
            </div>
          </section>
          <section className="Footer-3">
            <div className="Team">
              <h1 className="Team-h1">Nosotros</h1>
              <p className="Team-p">Quiénes somos</p>
              <p className="Team-p">Únete al equipo</p>
              <p className="Team-p">Blog</p>
            </div>
          </section>
          <section className="Footer-4">
            <div className="Help">
              <h1 className="Help-h1">Soporte</h1>
              <p className="Help-p">Preguntas frecuentes</p>
              <p className="Help-p">Aviso legal</p>
              <p className="Help-p">Política de privacidad</p>
              <p className="Help-p">Política de cookies</p>
            </div>
          </section>
          <section className="Footer-5">
            <div className="Social">
              <h1 className="Contact-h1">Síguenos</h1>
              <p className="Contact-phone">600 27 73 30</p>
            </div>
          </section>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;