import React from "react";
import Hero from "../../components/Hero/Hero";
import UserForm from "../../components/UserForm/UserForm";
import UserList from "../../components/UserList/UserList";

const Home = () => (
  <div className="container is-fluid">
    <Hero />
    <UserForm />
    <UserList />
  </div>
);

export default Home;
