import React from "react";
import User from "../../User/User";

const UserListBody = ({ counter, users }) => {
  return (
    <tbody>
      {users.map((user) => (
        <User
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
  );
};

export default UserListBody;
