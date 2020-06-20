import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import User from "../User/User";

const UserList = () => {
  const ListofUsers = useContext(UserContext);

  console.log(ListofUsers);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Lista osób</h1>
      </div>

      <table className=" table is-hoverable is-bordered is-fullwidth mt-5 is-striped">
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
          </tr>
        </thead>
        {/* DODAĆ NA KONIEC */}
        {/* <tfoot></tfoot> */}
        <tbody>
          {ListofUsers.map((user) => (
            <User
              key={user.name}
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
      </table>
    </section>
  );
};

export default UserList;
