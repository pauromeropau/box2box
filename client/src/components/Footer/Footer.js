import React, { Component } from "react";
import "./Footer.css";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import linkedin from "./images/linkedin.svg";
import twitter from "./images/twitter.svg";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="Footer">
          <section className="Footer-1">
            <div className="Contact">
              <h1 className="Contact-h1">Contacta</h1>
              <h2 className="Contact-h2">600 27 73 30</h2>
              <h2 className="Contact-h2">contacto@box2box.es</h2>
              <p className="Contact-adress">Calle de Ríos Rosas, 36, 28003, Madrid</p>
            </div>
          </section>
          <section className="Footer-2">
            <div className="Cities">
            <h1 className="Cities-h1">¿Dónde estamos?</h1>
              <h2 className="Cities-h2">España</h2>
              <p className="Cities-p">Madrid</p>
              <p className="Cities-p">Barcelona</p>
              <p className="Cities-p">Valencia</p>
              <p className="Cities-p">Málaga</p>
              <h2 className="Cities-h2">Portugal</h2>
              <p className="Cities-p">Lisboa</p>
              <h2 className="Cities-h2">Francia</h2>
              <p className="Cities-p">París</p>
              <h2 className="Cities-h2">Próximas aperturas</h2>
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
              <h1 className="Social-h1">Síguenos</h1>
              <img className="instagram" src={instagram} alt="Instagram"/>
              <img className="facebook" src={facebook} alt="Facebook"/>
              <img className="linkedin" src={linkedin} alt="LinkedIn"/>
              <img className="twitter" src={twitter} alt="Twitter"/>
            </div>
          </section>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;