import React, { useContext } from "react";
import { GlobalContext } from "./Context";

function Income() {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map((transaction) => transaction.amount);

  const inc = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0);

  const exp =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, amount) => (acc += amount), 0) * -1;

  return (
    <div className="inc-exp">
      <div className="income">
        <h3>Total Income </h3>

        <span>$ {inc}</span>
      </div>

      <div className="expense">
        <h3>Total Expense</h3>

        <span>$ {exp}</span>
      </div>
    </div>
  );
}

export default Income;
