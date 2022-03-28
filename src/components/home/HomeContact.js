import React from "react";
import Decoration from "../other/Decoration";
import Form from "./contact/Form";

function HomeHeader() {
  return (
    <section className="element contact-wrapper" id="contact">
      <div className="contact-text">
        <div className="contact-text_head">Skontaktuj się z nami</div>
        <Decoration />
        <Form />
      </div>
    </section>
  );
}

export default HomeHeader;
