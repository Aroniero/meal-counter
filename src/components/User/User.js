import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const User = ({
  printTable,
  lp,
  id,
  name,
  surname,
  classNum,
  dinnerQuantity,
  dinnerPrice,
  dinnerSum,
  teaQuantity,
  teaPrice,
  teaSum,
  total,
}) => {
  const { users, removeUser } = useContext(UserContext);

  return (
    <tr>
      <th>{lp}</th>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{classNum}</td>

      <td>{dinnerQuantity} szt.</td>
      <td>{dinnerPrice} zł.</td>

      <td>{dinnerSum.toFixed(2)} zł.</td>

      <td>{teaQuantity} szt.</td>
      <td>{teaPrice} zł.</td>
      <td>{teaSum.toFixed(2)} zł.</td>

      <td>{total.toFixed(2)} zł.</td>
      {/* <td>
        <button
          className="button is-warning"
          onClick={() => {
            editUser(users, id);
          }}
        >
          Edytuj
        </button>
      </td> */}

      {printTable ? (
        <td></td>
      ) : (
        <td>
          <button
            className="button is-danger"
            onClick={() => {
              removeUser(users, id);
            }}
          >
            Usuń
          </button>
        </td>
      )}
    </tr>
  );
};

export default User;
