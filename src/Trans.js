import React, { useContext } from "react";
import "./App.css";
import { GlobalContext } from "./Context";
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';




export const Transaction = ({ transaction }) => {
  const { del } = useContext(GlobalContext);

  return (
    <div>
      <li className={transaction.amount < 0 ? "li-minus" : "li-plus"}>
      <Tooltip title="Delete">
        <DeleteIcon  onClick={() => del(transaction.id)} className="del-btn">
         </DeleteIcon>
         </Tooltip>
        {transaction.text} <span> $ {transaction.amount} </span>
        </li>
        
      <br />
    </div>
  );
};
