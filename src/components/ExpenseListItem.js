import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseListItem = ({
  expense: { description, amount, createdAt, id }
}) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {amount} - {moment(createdAt).format("MMM Do,YY")}
      </p>
    </div>
  );
};

export default ExpenseListItem;
