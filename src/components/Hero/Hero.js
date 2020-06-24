import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero is-info ">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Meal Counter</h1>
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
                <NavLink to="/studentsTable" activeClassName="is-active">
                  Tabela do drukowania dla uczniów
                </NavLink>
              </li>
              <li>
                <NavLink to="/workersTable" activeClassName="is-active">
                  Tabela do drukowania dla pracowników
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
