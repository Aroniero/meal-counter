import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import styles from "./CardList.module.scss";
import Card from "./Card/Card";

const CardList = () => {
  const { users } = useContext(UserContext);

  console.log(users);

  return (
    <div className={styles.cardContainer}>
      {users.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  );
};

export default CardList;
