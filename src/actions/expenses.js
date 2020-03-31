import database from "../firebase/firebase";
// ADD_EXPENSE
export const startAddExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const addExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          startAddExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// REMOVE_EXPENSE
export const startRemoveExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const removeExpense = ({ id } = {}) => {
  return async dispatch => {
    await database.ref(`expenses/${id}`).remove();
    dispatch(startRemoveExpense({ id }));
  };
};

// EDIT_EXPENSE
export const startEditExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const editExpense = (id, updates) => {
  return async dispatch => {
    await database.ref(`expenses/${id}`).update(updates);
    dispatch(startEditExpense(id, updates));
  };
};

// SET_EXPENSE
export const startSetExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const SetExpenses = () => {
  return async dispatch => {
    const snapshot = await database.ref("expenses").once("value");
    const expenses = [];
    snapshot.forEach(childSnapshot => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    dispatch(startSetExpenses(expenses));
  };
};
