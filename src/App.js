import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import Hero from "./components/Hero/Hero";
import UserList from "./components/UserList/UserList";
import UserContext from "./context/UserContext";
import { getId } from "./utils/getId";

const App = () => {
  // OGARNĄĆ LOCAL STORAGE
  // const [users, setUsers] = useState(JSON.parse(localStorage.getItem('count')))
  const [users, setUsers] = useState([
    {
      id: "231",
      name: "Kamil",
      surname: "Nowak",
      classNum: 0,
      dinnerQuantity: 2,
      dinnerPrice: 2.35,
      dinnerSum: 2,
      teaQuantity: 2,
      teaPrice: 2.33,
      teaSum: 4,
      total: 6,
    },
    {
      id: "23131",
      name: "Andrzej",
      surname: "Andrzejewicz",
      classNum: 0,
      dinnerQuantity: 2,
      dinnerPrice: 2.35,
      dinnerSum: 2,
      teaQuantity: 2,
      teaPrice: 2.33,
      teaSum: 4,
      total: 6,
    },
    {
      id: "232311",
      name: "Ania",
      surname: "Annowska",
      classNum: 0,
      dinnerQuantity: 22,
      dinnerPrice: 10,
      dinnerSum: 2,
      teaQuantity: 3,
      teaPrice: 2.33,
      teaSum: 10,
      total: 6,
    },
  ]);

  // OGARNĄĆ LOCAL STORAGE
  // useEffect(() => {
  //   localStorage.setItem('users', JSON.stringify(users))
  // })

  const addUser = (userData) => {
    const id = getId();
    const dinnerSum = userData.dinnerQuantity * userData.dinnerPrice;
    const teaSum = userData.teaQuantity * userData.teaPrice;
    const total = dinnerSum + teaSum;

    setUsers([...users, { id, ...userData, dinnerSum, teaSum, total }]);
  };

  const removeUser = (users, id) => {
    setUsers(users.filter((user) => (user.id !== id ? user : null)));
  };

  const totalValuesOfUsers = (users, column) => {
    return users
      .map((user) => user[column])
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
  };

  const context = {
    users,
    addUser,
    removeUser,
    totalValuesOfUsers,
  };

  return (
    <UserContext.Provider value={context}>
      <div className="container is-fluid">
        <Hero />
        <UserForm />
        <UserList />
      </div>
    </UserContext.Provider>
  );
};

export default App;
