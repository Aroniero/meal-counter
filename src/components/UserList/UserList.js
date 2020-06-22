import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

import UserListHead from "./UserListHead/UserListHead";
import UserListFoot from "./UserListFoot/UserListFoot";
import UserListBody from "./UserListBody/UserListBody";

import {generatePage} from '../../utils/generatePage';
// import TableToPrint from "../../pages/TableToPrint/TableToPrint";
// import styles from "./UserList.module.scss";
// import cx from "classnames";

const UserList = ({ printTable }) => {
  const { users } = useContext(UserContext);
  let counter = 1;

  return printTable ? (
    <table
      className="is-narrow table is-hoverable is-bordered is-striped"
      id="tableToPrint"
    >
      <UserListHead printTable />
      <UserListBody counter={counter} users={users} printTable />
      <UserListFoot />
    </table>
  ) : (
    <section className="section container">
      <div className="container">
        <h1 className="title">Lista osób</h1>
      </div>
      <table className="table is-hoverable is-bordered is-fullwidth mt-5 is-striped">
        {/* DODAĆ NA KONIEC */}
        <UserListHead />
        <UserListBody counter={counter} users={users} />
        <UserListFoot />
      </table>
      <button className="button is-success" onClick={() => generatePage('tableToPrint')}>
        Wygeneruj tabele
      </button>
    </section>
  );

  // <section className="section">
  //   <div className="container">
  //     <h1 className="title">Lista osób</h1>
  //   </div>
  //   <table className=" table is-hoverable is-bordered is-fullwidth mt-5 is-striped">
  //     {/* DODAĆ NA KONIEC */}
  //     <UserListHead />
  //     <UserListBody counter={counter} users={users} />
  //     <UserListFoot />
  //   </table>
  // </section>
};

export default UserList;
