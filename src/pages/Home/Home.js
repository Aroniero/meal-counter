import React, { useContext } from "react";
import Hero from "../../components/Hero/Hero";
import UserForm from "../../components/UserForm/UserForm";
import UserList from "../../components/UserList/UserList";
import DateForm from "../../components/DateForm/DateForm";
import UserContext from "../../context/UserContext";

const Home = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="container is-fluid">
      <Hero />
      <UserForm />
      <DateForm />
      <UserList studentList users={users} />
    </div>
  );
};

export default Home;
