import React, { useEffect, useState } from "react";
import Decoration from "./other/Decoration";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { schemaRegister } from "./home/contact/schemaRegister";

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const [errors, setErrors] = useState([]);
  const [errorsMsgs, setErrorMsgs] = useState({
    email: [],
    password: [],
    passwordRepeat: [],
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { error } = schemaRegister.validate(form, {
      abortEarly: false,
    });

    console.log(error);
    error !== undefined
      ? setErrors(error.details)
      : setErrorMsgs({
          email: [],
          password: [],
          passwordRepeat: [],
        });

    console.log(errors);
  };

  useEffect(() => {
    errors.length !== 0 &&
      setErrorMsgs({
        email: errors.filter((error) => error.context.key === "email"),
        password: errors.filter((error) => error.context.key === "password"),
        passwordRepeat: errors.filter(
          (error) => error.context.key === "passwordRepeat"
        ),
      });
  }, [errors]);

  return (
    <section className="register-wrapper" id="register">
      <div className="register-text">
        <div className="register-text_head">Załóż konto</div>
        <Decoration />
        <form className="form" id="registerForm" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={
                errorsMsgs.email.length !== 0
                  ? "form-input invalid"
                  : "form-input"
              }
              id="email"
            />
            <div className="email-errors">
              <ul>
                {errorsMsgs.email.length !== 0 &&
                  errorsMsgs.email.map((msg) => (
                    <li key={uniqid()}>{msg.message}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="password">
              Hasło
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className={
                errorsMsgs.password.length !== 0
                  ? "form-input invalid"
                  : "form-input"
              }
              id="password"
            />
            <div className="password-errors">
              <ul>
                {errorsMsgs.password.length !== 0 &&
                  errorsMsgs.password.map((msg) => (
                    <li key={uniqid()}>{msg.message}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="password-repeat">
              Powtórz hasło
            </label>
            <input
              type="password"
              name="passwordRepeat"
              value={form.passwordRepeat}
              onChange={handleChange}
              className={
                errorsMsgs.passwordRepeat.length !== 0
                  ? "form-input invalid"
                  : "form-input"
              }
              id="password-repeat"
            />
            <div className="passwordRepeat-errors">
              <ul>
                {errorsMsgs.passwordRepeat.length !== 0 &&
                  errorsMsgs.passwordRepeat.map((msg) => (
                    <li key={uniqid()}>{msg.message}</li>
                  ))}
              </ul>
            </div>
          </div>
        </form>
        <div className="register-button-wrapper">
          <Link to="/logowanie">
            <button className="button-mid">Zaloguj się</button>
          </Link>
          <button className="button-mid" form="registerForm" type="submit">
            Załóż konto
          </button>
        </div>
      </div>
    </section>
  );
}

export default Register;
