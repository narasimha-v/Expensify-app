import React, { useState } from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { SetExpenses } from "./actions/expenses";
const store = configureStore();
const App = () => {
  let [display, setDisplay] = useState(false);
  store.dispatch(SetExpenses()).then(() => setDisplay((display = true)));
  return (
    <div>
      {display ? (
        <Provider store={store}>
          <AppRouter />
        </Provider>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default App;
