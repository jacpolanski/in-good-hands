import React from "react";
import Decoration from "../other/Decoration";
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <section className="header-wrapper">
      <div className="header-image" />
      <div id="header" className="element header-text">
        <div className="header-text_head">
          <span>Zacznij pomagać!</span>
          <span>Oddaj niechciane rzeczy w zaufane ręce</span>
        </div>
        <Decoration />
        <div className="header-text_buttons">
          <Link to="/logowanie">
            <button className="button-big">oddaj rzeczy</button>
          </Link>
          <Link to="/logowanie">
            <button className="button-big">zorganizuj zbiórkę</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHeader;
