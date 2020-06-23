import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

import User from "../User/User";

import { generatePage } from "../../utils/generatePage";
// import TableToPrint from "../../pages/TableToPrint/TableToPrint";
import styles from "./UserList.module.scss";
// import cx from "classnames";

const UserList = ({ printTable }) => {
  const { users, date, totalValuesOfUsers } = useContext(UserContext);
  let counter = 1;

  const totalDinnerQuantity = totalValuesOfUsers(users, "dinnerQuantity");
  const totalDinnerSum = totalValuesOfUsers(users, "dinnerSum").toFixed(2);
  const totalTeaQuantity = totalValuesOfUsers(users, "teaQuantity");
  const totalTeaSum = totalValuesOfUsers(users, "teaSum").toFixed(2);
  const summary = totalValuesOfUsers(users, "total").toFixed(2);

  return printTable ? (
    <div>
      <p className={styles.header}>
        Zestawienie osób kupujących obiady oraz herbaty <br />
        za {date.listDate}
      </p>
      <table
        className="is-narrow table is-hoverable is-bordered is-striped"
        id="tableToPrint"
      >
        <thead>
          <tr>
            <th>
              <abbr title="Position">Lp.</abbr>
            </th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>
              <abbr title="Klasa">Kl.</abbr>
            </th>
            <th>
              <abbr title="Ilość Obiadów">Il. ob.</abbr>
            </th>
            <th>
              <abbr title="Cena obiadów">C. ob.</abbr>
            </th>
            <th>
              <abbr title="Wartość obiadów">W. ob.</abbr>
            </th>
            <th>
              <abbr title="Ilość herbat">Il. her.</abbr>
            </th>
            <th>
              <abbr title="Cena herbat">C. her.</abbr>
            </th>
            <th>
              <abbr title="Wartość herbat">W. her.</abbr>
            </th>
            <th>Suma</th>
            <th>
              <abbr className={styles.signatureCell}>Podpis</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
              printTable={printTable}
              key={user.id}
              lp={counter++}
              id={user.id}
              name={user.name}
              surname={user.surname}
              classNum={user.classNum}
              dinnerQuantity={user.dinnerQuantity}
              dinnerPrice={user.dinnerPrice}
              dinnerSum={user.dinnerSum}
              teaQuantity={user.teaQuantity}
              teaPrice={user.teaPrice}
              teaSum={user.teaSum}
              total={user.total}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>X</th>
            <th>X</th>
            <th>Suma</th>
            <th>X</th>
            <th>
              <abbr title="Ilość Obiadów">{totalDinnerQuantity} szt.</abbr>
            </th>
            <th>
              <abbr title="Cena obiadów">X</abbr>
            </th>
            <th>
              <abbr title="Wartość obiadów">{totalDinnerSum} zł.</abbr>
            </th>
            <th>
              <abbr title="Ilość herbat">{totalTeaQuantity} szt.</abbr>
            </th>
            <th>
              <abbr title="Cena herbat">X</abbr>
            </th>
            <th>
              <abbr title="Wartość herbat">{totalTeaSum} zł.</abbr>
            </th>
            <th>
              <abbr title="Suma">{summary} zł.</abbr>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  ) : (
    <section className="section container">
      <div className="container">
        <h1 className="title">Lista osób</h1>
      </div>
      <table className="table is-hoverable is-bordered is-fullwidth mt-5 is-striped">
        {/* DODAĆ NA KONIEC */}
        <thead>
          <tr>
            <th>
              <abbr title="Position">Lp.</abbr>
            </th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>
              <abbr title="Klasa">Kl.</abbr>
            </th>
            <th>
              <abbr title="Ilość Obiadów">Il. ob.</abbr>
            </th>
            <th>
              <abbr title="Cena obiadów">C. ob.</abbr>
            </th>
            <th>
              <abbr title="Wartość obiadów">W. ob.</abbr>
            </th>
            <th>
              <abbr title="Ilość herbat">Il. her.</abbr>
            </th>
            <th>
              <abbr title="Cena herbat">C. her.</abbr>
            </th>
            <th>
              <abbr title="Wartość herbat">W. her.</abbr>
            </th>
            <th>Suma</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
              printTable={printTable}
              key={user.id}
              lp={counter++}
              id={user.id}
              name={user.name}
              surname={user.surname}
              classNum={user.classNum}
              dinnerQuantity={user.dinnerQuantity}
              dinnerPrice={user.dinnerPrice}
              dinnerSum={user.dinnerSum}
              teaQuantity={user.teaQuantity}
              teaPrice={user.teaPrice}
              teaSum={user.teaSum}
              total={user.total}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>X</th>
            <th>X</th>
            <th>Suma</th>
            <th>X</th>
            <th>
              <abbr title="Ilość Obiadów">{totalDinnerQuantity} szt.</abbr>
            </th>
            <th>
              <abbr title="Cena obiadów">X</abbr>
            </th>
            <th>
              <abbr title="Wartość obiadów">{totalDinnerSum} zł.</abbr>
            </th>
            <th>
              <abbr title="Ilość herbat">{totalTeaQuantity} szt.</abbr>
            </th>
            <th>
              <abbr title="Cena herbat">X</abbr>
            </th>
            <th>
              <abbr title="Wartość herbat">{totalTeaSum} zł.</abbr>
            </th>
            <th>
              <abbr title="Suma">{summary} zł.</abbr>
            </th>
          </tr>
        </tfoot>
      </table>
      <section
        className="is-primary buttons is-centered are-medium is-grouped
      "
      >
        <button
          className=" button is-success is-primary is-outlined is-rounded "
          onClick={() => generatePage("tableToPrint")}
        >
          Drukuj/Zapisz tabele
        </button>
        <button
          className="button is-warning  is-primary is-outlined is-rounded"
          onClick={() => generatePage("cardsToPrint")}
        >
          Drukuj/Zapisz karteczki
        </button>
      </section>
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
