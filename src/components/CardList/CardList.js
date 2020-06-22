import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import styles from "./CardList.module.scss";
import Card from "./Card/Card";

const CardList = () => {
  const { users, date } = useContext(UserContext);

  return (
    <div className={styles.cardContainer}>
      {users.map((user) => (
        <Card key={user.id} user={user} date={date} />
      ))}
    </div>
  );
};

export default CardList;
