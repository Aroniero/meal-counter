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
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  // OGARNĄĆ LOCAL STORAGE
  // useEffect(() => {
  //   localStorage.setItem('users', JSON.stringify(users))
  // })
  const [date, setDate] = useState(
    JSON.parse(localStorage.getItem("date")) || {
      dinnerMonth: "Styczeń",
      teaMonth: "Styczeń",
      listDate: "01/06/2020",
      cardDate: "01/06/2020",
    }
  );

  const addUser = (userData) => {
    const id = getId();
    const dinnerSum = userData.dinnerQuantity * userData.dinnerPrice;
    const teaSum = userData.teaQuantity * userData.teaPrice;
    const total = dinnerSum + teaSum;
    const newUser = [
      ...users,
      { id, ...userData, dinnerSum, teaSum, total },
    ].sort((a, b) => {
      if (a.classNum < b.classNum) return -1;
      if (a.classNum > b.classNum) return 1;
      return 0;
    });

    localStorage.setItem("users", JSON.stringify(newUser));
    setUsers(newUser);
  };

  const removeUser = (users, id) => {
    const minusOneUser = users.filter((user) => (user.id !== id ? user : null));

    localStorage.setItem("users", JSON.stringify(minusOneUser));
    setUsers(minusOneUser);
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
