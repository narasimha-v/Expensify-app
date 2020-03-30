import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { SetExpenses } from "./actions/expenses";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(<p>Loading....</p>, document.getElementById("root"));
store.dispatch(SetExpenses()).then(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
