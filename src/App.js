import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import StudentsTable from "./pages/StudentsTable/StudentsTable";
import WorkersTable from "./pages/WorkersTable/WorkersTable";
import CardsToPrint from "./pages/CardsToPrint/CardsToPrint";
import UserContext from "./context/UserContext";
import { getId } from "./utils/getId";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  // OGARNĄĆ LOCAL STORAGE
  // const [users, setUsers] = useState(JSON.parse(localStorage.getItem('count')))
  const [users, setUsers] = useState([
    {
      id: "231",
      name: "Kamil",
      surname: "Nowak",
      classNum: "0",
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
      classNum: "Pracownik",
      dinnerQuantity: 22,
      dinnerPrice: 10,
      dinnerSum: 2,
      teaQuantity: 3,
      teaPrice: 2.33,
      teaSum: 10,
      total: 6,
    },
    {
      id: "23131",
      name: "Andrzej",
      surname: "Andrzejewicz",
      classNum: "0",
      dinnerQuantity: 2,
      dinnerPrice: 2.35,
      dinnerSum: 2,
      teaQuantity: 2,
      teaPrice: 2.33,
      teaSum: 4,
      total: 6,
    },
    {
      id: "2323112",
      name: "Ania",
      surname: "Annowska",
      classNum: "Pracownik",
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
  const [date, setDate] = useState({
    dinnerMonth: "Styczeń",
    teaMonth: "Styczeń",
    listDate: "01/06/2020",
    cardDate: "01/06/2020",
  });

  const addUser = (userData) => {
    const id = getId();
    const dinnerSum = userData.dinnerQuantity * userData.dinnerPrice;
    const teaSum = userData.teaQuantity * userData.teaPrice;
    const total = dinnerSum + teaSum;

    setUsers(
      [...users, { id, ...userData, dinnerSum, teaSum, total }].sort((a, b) => {
        if (a.classNum < b.classNum) return -1;
        if (a.classNum > b.classNum) return 1;
        return 0;
      })
    );
  };

  const removeUser = (users, id) => {
    setUsers(users.filter((user) => (user.id !== id ? user : null)));
  };

  const context = {
    users,
    date,
    setDate,
    addUser,
    removeUser,
  };

  return (
    <UserContext.Provider value={context}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/studentsTable" component={StudentsTable} />
          <Route path="/workersTable" component={WorkersTable} />
          <Route path="/cardsToPrint" component={CardsToPrint} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
