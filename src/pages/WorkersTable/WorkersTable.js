import React, { useContext, useEffect, useState } from "react";
import UserList from "../../components/UserList/UserList";
import UserContext from "../../context/UserContext";
// import styles from "./TableToPrint.module.scss";

const WorkersTable = () => {
  const { users } = useContext(UserContext);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    setWorkers(users.filter((user) => user.classNum === "Pracownik"));
  }, [users]);

  return <UserList workersTable users={workers} />;
};

export default WorkersTable;
