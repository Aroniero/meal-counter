import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

const UserListFoot = () => {
  const { users, totalValuesOfUsers } = useContext(UserContext);

  const totalDinnerQuantity = totalValuesOfUsers(users, "dinnerQuantity");
  const totalDinnerSum = totalValuesOfUsers(users, "dinnerSum").toFixed(2);
  const totalTeaQuantity = totalValuesOfUsers(users, "teaQuantity");
  const totalTeaSum = totalValuesOfUsers(users, "teaSum").toFixed(2);
  const summary = totalValuesOfUsers(users, "total").toFixed(2);

  console.log(totalDinnerQuantity);
  return (
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
  );
};

export default UserListFoot;
