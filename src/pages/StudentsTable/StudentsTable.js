import React, { useContext, useState, useEffect } from "react";
import UserList from "../../components/UserList/UserList";
import styles from "./StudentsTable.module.scss";
import UserContext from "../../context/UserContext";

const StudentsTable = () => {
  const { users } = useContext(UserContext);

  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(users.filter((user) => !isNaN(user.classNum)));
  }, [users]);

  return <UserList class={styles.position} studentsTable users={students} />;
};

export default StudentsTable;
