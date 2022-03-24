import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as RoutLink } from "react-router-dom";

function HomeNav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="home-nav">
      <>
        <nav className="navbar">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <RoutLink to="/" className="nav-links">
                Start
              </RoutLink>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-links"
                to="reason"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMobileMenu}
              >
                O co chodzi?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-links"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMobileMenu}
              >
                O nas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-links"
                to="organizations"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMobileMenu}
              >
                Fundacja i Organizacje
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-links"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </>
    </div>
  );
}

export default HomeNav;
