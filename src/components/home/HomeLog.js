import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../other/AuthContext";
import { auth } from "../../firebase";

function HomeLog() {
  const { currentUser, logOut } = useAuth();
  if (!currentUser) {
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
  } else {
    return (
      <div className="home-log bu">
        <span className="button-small">Cześć {currentUser.email}</span>
        <Link to="#">
          <button className="button-small">Oddaj rzeczy</button>
        </Link>
        <button className="button-small" onClick={() => logOut(auth)}>
          Wyloguj
        </button>
      </div>
    );
  }
}

export default HomeLog;
