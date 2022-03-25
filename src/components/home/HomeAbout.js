import React from "react";
import Decoration from "../other/Decoration";

function HomeAbout() {
  return (
    <div id="about" className="element about-wrapper">
      <div className="about-text">
        <div className="about-text_wrapper">
          <div className="about-text_header">O nas</div>
          <Decoration />
          <div className="about-text_paragraph">
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </div>
          <div className="about-text_signature" />
        </div>
      </div>
      <div className="about-image" />
    </div>
  );
}

export default HomeAbout;
