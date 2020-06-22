import React from "react";
import styles from "./CardList.module.scss";
import Card from "./Card/Card";

const CardList = () => {
  return (
    <div className={styles.cardContainer}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
