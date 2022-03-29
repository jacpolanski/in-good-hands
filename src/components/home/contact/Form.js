import React, { useEffect, useState } from "react";
import { schemaContact } from "./schemaContact";
import uniqid from "uniqid";

function Form({ setIsSent }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState([]);
  const [errorsMsgs, setErrorMsgs] = useState({
    name: [],
    email: [],
    message: [],
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setIsSent(false);
    e.preventDefault();

    const { error } = schemaContact.validate(form, {
      abortEarly: false,
    });
    error !== undefined && setErrors(error.details);

    error === undefined &&
      fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          data.status === "success" && setIsSent(true);
        });
    error === undefined && setForm({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    errors.length !== 0 &&
      setErrorMsgs({
        name: errors.filter((error) => error.context.key === "name"),
        email: errors.filter((error) => error.context.key === "email"),
        message: errors.filter((error) => error.context.key === "message"),
      });
  }, [errors]);

  console.log(errorsMsgs);
  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field-wrapper">
          <div className="form-field">
            <label className="form-label" htmlFor="name">
              Wpisz swoje imię
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-input"
              id="name"
              placeholder="Krzysztof"
            />
            <div className="name-errors">
              <ul>
                {errorsMsgs.name.length !== 0 &&
                  errorsMsgs.name.map((msg) => (
                    <li key={uniqid()}>{msg.message}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Wpisz swój email
            </label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-input"
              id="email"
              placeholder="abc@xyz.pl"
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
        </div>

        <div className="form-field textarea">
          <label className="form-label" htmlFor="text">
            Wpisz swoją wiadomość
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="form-input text"
            id="message"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <div className="text-errors">
            <ul>
              {errorsMsgs.message.length !== 0 &&
                errorsMsgs.message.map((msg) => (
                  <li key={uniqid()}>{msg.message}</li>
                ))}
            </ul>
          </div>
        </div>

        <button type="submit" className="button-mid">
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default Form;
