import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

import UserListHead from "./UserListHead/UserListHead";
import UserListFoot from "./UserListFoot/UserListFoot";
import UserListBody from "./UserListBody/UserListBody";

const UserList = () => {
  const { users } = useContext(UserContext);
  let counter = 1;

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Lista osób</h1>
      </div>
      <table className=" table is-hoverable is-bordered is-fullwidth mt-5 is-striped">
        {/* DODAĆ NA KONIEC */}
        <UserListHead />
        <UserListBody counter={counter} users={users} />
        <UserListFoot />
      </table>
    </section>
  );
};

export default UserList;
