import React, { useContext } from "react";
import "./App.css";
import { GlobalContext } from "./Context";

export const Transaction = ({ transaction }) => {
  const { del } = useContext(GlobalContext);

  return (
    <div>
      <li className={transaction.amount < 0 ? "li-minus" : "li-plus"}>
        <button onClick={() => del(transaction.id)} className="del-btn">
          x
        </button>
        {transaction.text} <span> $ {transaction.amount} </span>
        </li>
        
      <br />
    </div>
  );
};
