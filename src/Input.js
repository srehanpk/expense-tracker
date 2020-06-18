import React, {useState, useContext} from 'react';
import {GlobalContext} from './Context';
import {Transaction} from './Trans';



function Input  () {

        const {transaction} = useContext(GlobalContext);


     const [text, setText] = useState("");
     const [amount, setAmount] = useState();

     let [expText, setExpText] = useState("");
     let [expAmount, setExpAmount] = useState();

    const change =(e) => {setExpAmount(Number(-e.target.value))}
    
    const {add} = useContext(GlobalContext);


    
    const onExpense = (e) => {
        e.preventDefault();

        let obj1 = {
            id: Math.floor(Math.random() * 100000000),
            expText,
            expAmount
    } 
            let trans = {id: obj1.id, text: obj1.expText, amount: obj1.expAmount};
            add(trans);
            
    }

     
     const onIncome = (e) => {
         e.preventDefault();

         let transaction = {
             id: Math.floor(Math.random() * 100000000),
             text,
             amount: +amount 
            }
            
            add(transaction);
            
        }
        
        

    return (

            <div>

                <div className="form">
                <div className="plus">

                <form onSubmit={onIncome}>
                    <b>Description:</b>
                    <input type = "text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="input text" ></input>
  
                    <br/><br/>
                    <b>Amount:</b>
                    <input type = "number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="input amount" ></input>
                    <br/><br/>
                    <button className="plus-btn">Add Income</button>
                    </form>

                </div>
                
                <div className="minus"> 

                <form onSubmit={onExpense}>
                    <b>Description:</b>
                    <input type = "text" value={expText} onChange={(e)=>setExpText(e.target.value)} placeholder="input text" ></input>

                    <br/> <br/>
                    <b>Amount:</b>
                    <input type = "number" value={expAmount} onChange={change} placeholder="Input Amount" ></input>
                    <br/><br/>
                    <button  className="minus-btn">Add Expense</button>
                    </form>
                </div>
                </div>


                <div className="list-div">
                    <h3>History</h3>

                    <ul className="list">
                    {transaction.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction}  />))}
                    
                    </ul>
                    




             </div>      
            </div>

    )
}

export default Input;