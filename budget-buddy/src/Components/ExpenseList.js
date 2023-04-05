import React from 'react';
//import { Table } from 'react-bootstrap';
import ExpenseRow from './ExpenseRow';

function ExpenseList({ expenses }) {
    return (
      <div>
        <h2>Expenses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <ExpenseRow key={expense.id} expense={expense} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default ExpenseList;
