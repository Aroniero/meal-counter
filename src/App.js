import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Hero from "./components/Hero/Hero";
import UserList from "./components/UserList/UserList";
import UserContext from "./context/UserContext";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "Kamil",
      surname: "Nowak",
      classNum: 0,
      dinnerQuantity: 2,
      dinnerPrice: 2,
      dinnerSum: 4,
      teaQuantity: 2,
      teaPrice: 2,
      teaSum: 4,
      total: 8,
    },
  ]);

  return (
    <UserContext.Provider value={users}>
      <div className="container is-fluid">
        <Hero />
        <Form />
        <UserList />
      </div>
    </UserContext.Provider>
  );
};

export default App;
