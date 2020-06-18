import React, {useContext} from 'react';
import  './App.css';
import {GlobalContext} from './Context';

export const Transaction = ({transaction}) => {

     const {del} = useContext(GlobalContext);

    // const check = (transaction.text);
    // console.log(check);


return (

    <div>
    <div>
        <li className="li">
        {transaction.text} <span> ${transaction.amount } </span>
        <button onClick={()=> del(transaction.id)} className="del-btn">x</button>
        </li>
        <br/>
    </div>

    
    
    </div>
    
)

}