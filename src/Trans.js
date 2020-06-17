import React, {useContext} from 'react';
import  './App.css';
import {GlobalContext} from './Context';

export const Transaction = (props) => {

    const {del} = useContext(GlobalContext);

return (

    <div>
        <li className="inc-li">{props.transaction.text} <span> ${props.transaction.amount} </span>
        <button onClick={()=> del(props.transaction.id)} className="del-btn">x</button>
        </li>
        <br/>
    </div>
)

}