import React, {useState, useContext} from 'react';
import {GlobalContext} from './Context';
import {Transaction} from './Trans';



function Input  () {

        const {transactions} = useContext(GlobalContext);

        


     const [incText, setIncText] = useState("");
     const [incAmount, setIncAmount] = useState("");

     const [expText, setExpText] = useState("");
     const [expAmount, setExpAmount] = useState("");
   
    return (

            <div className="form">


                <div className="plus">

                <form >
                    <b>Description</b><input type = "text" value={incText} onChange={(e)=>setIncText(e.target.value)}  placeholder="input text" ></input>
  
                    <br/>
                    <b>Amount</b><input type = "text" value={incAmount} onChange={(e)=>setIncAmount(e.target.value)} placeholder="Input Amount" ></input>
                    <br/><br/>
                    <button className="plus-btn">Add Income</button>
                    </form>


                    <h3>History</h3>
                    <ul className="list">
                    {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                    
                    </ul>
                        <br/> 
                    

                </div>


                <div className="minus"> 

                <form>
                    <b>Description</b><input type = "text" value={expText} onChange={(e)=>setExpText(e.target.value)} placeholder="input text" ></input>

                    <br/> 
                    <b>Amount</b><input type = "text" value={expAmount} onChange={(e)=>setExpAmount(e.target.value)} placeholder="Input Amount" ></input>
                    <br/><br/>
                    <button className="minus-btn">Add Expense</button>
                    </form>

                    <h3>History</h3>
                    <ul className="list">
                    <li className="li">
                      <span></span>
                    </li>
                    </ul>
                    <br/>
                    

                </div>
            </div>

    )
}

export default Input;