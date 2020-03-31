import database from "../firebase/firebase";
// ADD_EXPENSE
export const startAddExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const addExpense = (expenseData = {}) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    const ref = await database.ref(`users/${uid}/expenses`).push(expense);
    dispatch(
      startAddExpense({
        id: ref.key,
        ...expense
      })
    );
  };
};

// REMOVE_EXPENSE
export const startRemoveExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const removeExpense = ({ id } = {}) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await database.ref(`users/${uid}/expenses/${id}`).remove();
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
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await database.ref(`users/${uid}/expenses/${id}`).update(updates);
    dispatch(startEditExpense(id, updates));
  };
};

// SET_EXPENSE
export const startSetExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const SetExpenses = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const snapshot = await database.ref(`users/${uid}/expenses`).once("value");
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
