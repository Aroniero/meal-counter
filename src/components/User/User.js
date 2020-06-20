import React from "react";

const User = (props) => {
  return (
    <tr>
      <th>1</th>
      <td>{props.name}</td>
      <td>{props.surname}</td>
      <td>{props.classNum}</td>
      <td>{props.dinnerQuantity}</td>
      <td>{props.dinnerPrice}</td>
      <td>{props.dinnerSum}</td>
      <td>{props.teaQuantity}</td>
      <td>{props.teaPrice}</td>
      <td>{props.teaSum}</td>
      <td>{props.total}</td>
    </tr>
  );
};

export default User;
