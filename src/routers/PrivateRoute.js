import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

const PrivateRoute = props => {
  return (
    <div>
      {props.isAuthenticated ? (
        <div>
          <Header />
          <Route {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
