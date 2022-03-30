import React, { useState } from "react";
import { scroller } from "react-scroll";
import { Link as RoutLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function HomeNav() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);

  const scrollTarget = async () => {
    await navigate("/");
  };

  const closeMobileMenu = (target) => {
    setClick(false);
    scrollTarget().then(() => {
      if (target !== "none") {
        scroller.scrollTo(target, { smooth: true, duration: 700 });
      }
    });
  };

  return (
    <div className="home-nav">
      <>
        <nav className="navbar">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div className="mobile-wrapper">
              <li className="nav-item mobile">
                <RoutLink
                  to="/logowanie"
                  className="nav-links small"
                  onClick={() => closeMobileMenu("none")}
                >
                  Zaloguj
                </RoutLink>
              </li>
              <li className="nav-item mobile">
                <RoutLink
                  to="/rejestracja"
                  className="nav-links small"
                  onClick={() => closeMobileMenu("none")}
                >
                  Załóż konto
                </RoutLink>
              </li>
            </div>
            <li className="nav-item">
              <RoutLink
                to="/"
                className="nav-links"
                onClick={() => closeMobileMenu("none")}
              >
                Start
              </RoutLink>
            </li>
            <li className="nav-item">
              <RoutLink
                className="nav-links"
                to="/"
                onClick={() => closeMobileMenu("reason")}
              >
                O co chodzi?
              </RoutLink>
            </li>
            <li className="nav-item">
              <RoutLink
                className="nav-links"
                to="/"
                onClick={() => closeMobileMenu("about")}
              >
                O nas
              </RoutLink>
            </li>
            <li className="nav-item">
              <RoutLink
                className="nav-links"
                to="/"
                onClick={() => closeMobileMenu("organizations")}
              >
                Fundacja i Organizacje
              </RoutLink>
            </li>
            <li className="nav-item">
              <RoutLink
                className="nav-links"
                to="/"
                onClick={() => closeMobileMenu("contact")}
              >
                Kontakt
              </RoutLink>
            </li>
          </ul>
        </nav>
      </>
    </div>
  );
}

export default HomeNav;
