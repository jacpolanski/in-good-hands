import React, { useEffect, useState } from "react";
import Decoration from "./other/Decoration";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { schemaLogIn } from "./home/contact/schemaLogIn";

function LogIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [errorsMsgs, setErrorMsgs] = useState({
    email: [],
    password: [],
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

    const { error } = schemaLogIn.validate(form, {
      abortEarly: false,
    });

    console.log(error);
    error !== undefined
      ? setErrors(error.details)
      : setErrorMsgs({
          email: [],
          password: [],
        });

    console.log(errors);
  };

  useEffect(() => {
    errors.length !== 0 &&
      setErrorMsgs({
        email: errors.filter((error) => error.context.key === "email"),
        password: errors.filter((error) => error.context.key === "password"),
      });
    console.log(errorsMsgs);
  }, [errors]);

  return (
    <section className="logIn-wrapper" id="LogIn">
      <div className="logIn-text">
        <div className="logIn-text_head">Skontaktuj się z nami</div>
        <Decoration />
        <form className="form" id="logIn" onSubmit={handleSubmit}>
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
        </form>
        <div className="logIn-button-wrapper">
          <Link to="/rejestracja">
            <button className="button-mid">Załóż konto</button>
          </Link>
          <button className="button-mid" form="logIn" type="submit">
            Zaloguj się
          </button>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
