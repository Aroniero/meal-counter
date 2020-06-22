import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero is-info ">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Meal Counter</h1>
          {/* <h2 className="subtitle">Subtitle</h2> */}
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li>
                <NavLink to="/" activeClassName="is-active">
                  Dodawanie osoby do tabeli
                </NavLink>
              </li>
              <li>
                <NavLink to="/tableToPrint" activeClassName="is-active">
                  Tabela do drukowania
                </NavLink>
              </li>
              <li>
                <NavLink to="/cardsToPrint" activeClassName="is-active">
                  Karteczki do drukowania
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
