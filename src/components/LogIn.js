import React, { useEffect, useState } from "react";
import Decoration from "./other/Decoration";
import { Link, useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import { schemaLogIn } from "./home/contact/schemaLogIn";
import { useAuth } from "./other/AuthContext";
import { auth } from "../firebase";

function LogIn() {
  const navigate = useNavigate();
  const { signIn, currentUser } = useAuth();
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

  const handleSubmit = async (e) => {
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

    if (error === undefined) {
      await signIn(auth, form.email, form.password);
      navigate("/");
    }

    console.log(currentUser);
  };

  useEffect(() => {
    errors.length !== 0 &&
      setErrorMsgs({
        email: errors.filter((error) => error.context.key === "email"),
        password: errors.filter((error) => error.context.key === "password"),
      });
  }, [errors]);

  return (
    <section className="logIn-wrapper" id="LogIn">
      <div className="logIn-text">
        <div className="logIn-text_head">Zaloguj się</div>
        <Decoration />
        <form className="form" id="logInForm" onSubmit={handleSubmit}>
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
          <button className="button-mid" form="logInForm" type="submit">
            Zaloguj się
          </button>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
