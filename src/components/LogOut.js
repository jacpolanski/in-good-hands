import React from "react";
import Decoration from "./other/Decoration";
import { Link } from "react-router-dom";

function LogOut() {
  return (
    <section className="logOut-wrapper" id="logOut">
      <div className="logOut-text">
        <div className="logOut-text_head">Wylogowanie nastąpiło pomyślnie!</div>
        <Decoration />
        <div className="logOut-button-wrapper">
          <Link to="/">
            <button className="button-mid">Strona główna</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LogOut;
