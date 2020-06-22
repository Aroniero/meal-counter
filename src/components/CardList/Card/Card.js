import React from "react";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className="card">
      <header className="card-header">Hello</header>
      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </div>
      </div>
      <footer className="card-footer">Footer</footer>
    </div>
  );
};

export default Card;
