import React, { useState } from "react";
import Decoration from "../other/Decoration";
import icon1 from "../../assets/Icon-1.svg";
import icon2 from "../../assets/Icon-2.svg";
import icon3 from "../../assets/Icon-3.svg";
import icon4 from "../../assets/Icon-4.svg";
import { Link } from "react-router-dom";

function HomeReason() {
  const [numbers] = useState({
    bags: 10,
    organizations: 5,
    collections: 7,
  });

  return (
    <>
      <section id="reason" className="element reason-wrapper">
        <div className="container">
          <div className="reason-column">
            <div className="reason-column_number">{numbers.bags}</div>
            <div className="reason-column_head">Oddanych worków</div>
            <div className="reason-column_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              architecto corporis dolorum fugit ipsam ipsum modi officia, quae
              quis?
            </div>
          </div>
          <div className="reason-column">
            <div className="reason-column_number">{numbers.organizations}</div>
            <div className="reason-column_head">Wspartych organizacji</div>
            <div className="reason-column_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              architecto corporis dolorum fugit ipsam ipsum modi officia, quae
              quis?
            </div>
          </div>
          <div className="reason-column">
            <div className="reason-column_number">{numbers.collections}</div>
            <div className="reason-column_head">Zorganizowanych zbiórek</div>
            <div className="reason-column_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              architecto corporis dolorum fugit ipsam ipsum modi officia, quae
              quis?
            </div>
          </div>
        </div>
      </section>

      {/*4 columns section*/}

      <section className="easySteps-wrapper">
        <span className="easySteps-text">Wystarczą 4 proste kroki</span>
        <Decoration />
        <div className="easySteps-columns">
          <div className="easySteps-columns_wrapper">
            <div className="easySteps-column">
              <img src={icon1} className="easySteps-column_image" alt="icon1" />
              <div className="easySteps-column_head">Wybierz rzeczy</div>
              <div className="easySteps-column_line" />
              <div className="easySteps-column_text">
                ubrania, zabawki, sprzęt i inne
              </div>
            </div>
            <div className="easySteps-column">
              <img src={icon2} className="easySteps-column_image" alt="icon2" />
              <div className="easySteps-column_head">Spakuj je</div>
              <div className="easySteps-column_line" />
              <div className="easySteps-column_text">
                skorzystaj z worków na śmieci
              </div>
            </div>
            <div className="easySteps-column">
              <img src={icon3} className="easySteps-column_image" alt="icon3" />
              <div className="easySteps-column_head">
                Zdecyduj komu chcesz pomóc
              </div>
              <div className="easySteps-column_line" />
              <div className="easySteps-column_text">
                wybierz zaufane miejsce
              </div>
            </div>
            <div className="easySteps-column">
              <img src={icon4} className="easySteps-column_image" alt="icon4" />
              <div className="easySteps-column_head">Zamów kuriera</div>
              <div className="easySteps-column_line" />
              <div className="easySteps-column_text">
                kurier przyjedzie w dogodnym terminie
              </div>
            </div>
          </div>
        </div>
        <Link to={"/logowanie"}>
          <button className="button-big">oddaj rzeczy</button>
        </Link>
      </section>
    </>
  );
}

export default HomeReason;
