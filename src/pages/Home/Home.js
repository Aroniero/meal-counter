import React from "react";
import Hero from "../../components/Hero/Hero";
import UserForm from "../../components/UserForm/UserForm";
import UserList from "../../components/UserList/UserList";
import DateForm from "../../components/DateForm/DateForm";

const Home = () => (
  <div className="container is-fluid">
    <Hero />
    <UserForm />
    <DateForm />
    <UserList studentList />
  </div>
);

export default Home;
