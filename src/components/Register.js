import React from "react";
import Decoration from "./other/Decoration";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register-wrapper" id="register">
      <div className="register-text">
        <div className="register-text_head">Załóż konto</div>
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
          <div className="form-field">
            <label className="form-label" htmlFor="password-repeat">
              Powtórz hasło
            </label>
            <input
              type="password"
              className="form-input"
              id="password-repeat"
            />
          </div>
        </form>
        <div className="register-button-wrapper">
          <Link to="/logowanie">
            <button className="button-mid">Zaloguj się</button>
          </Link>
          <button className="button-mid">Załóż konto</button>
        </div>
      </div>
    </section>
  );
}

export default Register;
