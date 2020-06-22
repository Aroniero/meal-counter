import React from "react";
import UserList from "../../components/UserList/UserList";
import styles from "./TableToPrint.module.scss";

const TableToPrint = () => {
  return <UserList class={styles.position} printTable />;
};

export default TableToPrint;
