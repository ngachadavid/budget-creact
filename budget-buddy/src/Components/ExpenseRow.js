import React from "react";

function ExpenseRow({ expense }) {
  return (
    <tr>
      <td>{expense.id}</td>
      <td>{expense.title}</td>
      <td>{expense.amount}</td>
      <td>{expense.date}</td>
    </tr>
  );
}

export default ExpenseRow;
