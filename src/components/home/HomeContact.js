import React, { useState } from "react";
import Decoration from "../other/Decoration";
import Form from "./contact/Form";
import Footer from "./contact/Footer";

function HomeHeader() {
  const [isSent, setIsSent] = useState(false);

  console.log(isSent);
  return (
    <section className="element contact-wrapper" id="contact">
      <div className="contact-text">
        <div className="contact-text_head">Skontaktuj się z nami</div>
        <div className="contact-sent-wrapper">
          <Decoration />
          <div className={isSent ? "contact-sent active" : "contact-sent"}>
            <span>Wiadomość została wysłana.</span>
            <span>Wkrótce się skontaktujemy</span>
          </div>
        </div>
        <Form setIsSent={setIsSent} />
      </div>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default HomeHeader;
