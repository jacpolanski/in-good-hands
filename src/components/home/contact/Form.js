import React from "react";

function Form() {
  return (
    <div className="form-wrapper">
      <form className="form">
        <div className="form-field-wrapper">
          <div className="form-field">
            <label className="form-label" htmlFor="name">
              Wpisz swoje imię
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              placeholder="Krzysztof"
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Wpisz swój email
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              placeholder="abc@xyz.pl"
            />
          </div>
        </div>

        <div className="form-field textarea">
          <label className="form-label" htmlFor="text">
            Wpisz swoją wiadomość
          </label>
          <textarea
            className="form-input text"
            id="text"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>

        <button type="submit" className="button-mid">
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default Form;
