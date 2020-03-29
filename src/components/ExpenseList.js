import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expenses";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h1>Expense List</h1>

      {expenses.map(expense => {
        return <ExpenseListItem key={expense.id} expense={expense} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectedExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
