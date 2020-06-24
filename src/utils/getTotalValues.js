const totalValuesOfColumn = (users, column) => {
  return users
    .map((user) => user[column])
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
};

export default function totalValuesOfUsers(users) {
  const totalDinnerQuantity = totalValuesOfColumn(users, "dinnerQuantity");
  const totalDinnerSum = totalValuesOfColumn(users, "dinnerSum").toFixed(2);
  const totalTeaQuantity = totalValuesOfColumn(users, "teaQuantity");
  const totalTeaSum = totalValuesOfColumn(users, "teaSum").toFixed(2);
  const summary = totalValuesOfColumn(users, "total").toFixed(2);

  return {
    totalDinnerQuantity,
    totalDinnerSum,
    totalTeaQuantity,
    totalTeaSum,
    summary,
  };
}
