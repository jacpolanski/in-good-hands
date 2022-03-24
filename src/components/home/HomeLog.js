import React from "react";
import { Link } from "react-router-dom";

function HomeLog() {
  return (
    <div className="home-log">
      <Link to="/logowanie">
        <button className="button-small">Zaloguj</button>
      </Link>
      <Link to="/rejestracja">
        <button className="button-small">Załóż konto</button>
      </Link>
    </div>
  );
}

export default HomeLog;
