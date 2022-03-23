import React from "react";
import { Link } from "react-router-dom";

function HomeLog() {
  return (
    <div className="home-log">
      <button className="button-small">
        <Link to="/logowanie">Zaloguj</Link>
      </button>
      <button className="button-small">
        <Link to="/rejestracja">Załóż konto</Link>
      </button>
    </div>
  );
}

export default HomeLog;
