import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}></PublicRoute>
        <PrivateRoute
          path="/dashboard"
          component={ExpenseDashboardPage}
        ></PrivateRoute>
        <PrivateRoute path="/create" component={AddExpensePage}></PrivateRoute>
        <PrivateRoute
          path="/edit/:id"
          component={EditExpensePage}
        ></PrivateRoute>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
