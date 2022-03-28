import React from "react";
import Decoration from "./other/Decoration";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <section className="logIn-wrapper" id="LogIn">
      <div className="logIn-text">
        <div className="logIn-text_head">Skontaktuj się z nami</div>
        <Decoration />
        <form className="form">
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input type="email" className="form-input" id="email" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="password">
              Hasło
            </label>
            <input type="password" className="form-input" id="password" />
          </div>
        </form>
        <div className="logIn-button-wrapper">
          <Link to="/rejestracja">
            <button className="button-mid">Załóż konto</button>
          </Link>
          <button className="button-mid">Zaloguj się</button>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
