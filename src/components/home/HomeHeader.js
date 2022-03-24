import React from "react";

function HomeHeader() {
  return (
    <section className="header-wrapper">
      <div className="header-image" />
      <div id="header" className="element header-text">
        <div className="header-text_head">
          <span>Zacznij pomagać!</span>
          <span>Oddaj niechciane rzeczy w zaufane ręce</span>
        </div>
        <div className="header-text_image" />
        <div className="header-text_buttons">
          <button className="button-big">oddaj rzeczy</button>
          <button className="button-big">zorganizuj zbiórkę</button>
        </div>
      </div>
    </section>
  );
}

export default HomeHeader;
