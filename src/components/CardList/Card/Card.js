import React from "react";
import styles from "./Card.module.scss";

const Card = ({ user, date }) => {
  const {
    name,
    surname,
    classNum,
    dinnerPrice,
    dinnerQuantity,
    dinnerSum,
    teaPrice,
    teaQuantity,
    teaSum,
    total,
  } = user;
  const { dinnerMonth, teaMonth } = date;
  return (
    <div className={styles.card}>
      <header className={styles.cardHeader}>
        <p className={styles.cardHeader__Title}>
          Informacja dla {classNum === "Pracownik" ? "pracowników" : "uczniów"}
        </p>
        <p>
          Uprzejmię proszę o wpłate należności z tytułu <br /> dożywiania do p.
          Aldony Godlewskiej
        </p>
      </header>
      <div className={styles.cardBody}>
        <div className={styles.cardBody__Title}>
          <p>
            {name} {surname}
          </p>
          <p>Klasa {classNum}</p>
        </div>
        <div className={styles.cardBody__Content}>
          <div className={styles.cardBody__Dinners}>
            <p>Obiady ({dinnerMonth}): </p>
            <p>
              {dinnerQuantity} * {dinnerPrice} zł = {dinnerSum.toFixed(2)} zł
            </p>
          </div>
          <div className={styles.cardBody__Teas}>
            <p>Herbaty ({teaMonth}): </p>
            <p>
              {teaQuantity} * {teaPrice} zł = {teaSum.toFixed(2)} zł
            </p>
          </div>
          <div className={styles.cardBody__Total}>
            <p>Razem: </p>
            <p>{total.toFixed(2)} zł</p>
          </div>
        </div>
      </div>
      <footer className={styles.cardFooter}>
        Wpłatę proszę dokonać do <br /> 19-06-2020 r.
      </footer>
    </div>
  );
};

export default Card;
