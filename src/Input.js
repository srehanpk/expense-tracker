import React, {useState, useContext} from 'react';
import {incomeContext, expenseContext} from './Context';


function Input  () {

    
    let [addInc, setInc]=useState([]);
    let [addExp, setExp]=useState([]);

                         let [addIncText, setIncText]=useState([]);
                         let [addExpText, setExpText]=useState([]);

    const incAmount=(e)=>{

        setInc(e.target.value);
    }
    const expAmount=(e)=>{

        setExp(e.target.value);
    }
                        const incText=(e)=>{

                            setIncText(e.target.value);
                        }
                        const expText=(e)=>{

                            setExpText(e.target.value);
                        }
   
    return (

            <div className="form">


                <div className="plus">
                    <ol>
                    <li>{addIncText} = {addInc}</li>
                    </ol>
                        <br/> 
                    <form onSubmit={incText, incAmount}>
                    <b>Discription</b><input type = "text" placeholder="input text" onChange={incText}></input>
  
                    <br/>
                    <b>Amount</b><input type = "text" placeholder="Input Amount" onChange={incAmount}></input>
                    <br/><br/>
                    <button>Add Income</button>
                    </form>

                </div>


                <div className="minus"> 

                    <li>{addExpText} = {addExp}</li>

                    <br/>
                    <form>
                    <b>Discription</b><input type = "text" placeholder="input text" onChange={expText}></input>

                    <br/> 
                    <b>Amount</b><input type = "text" placeholder="Input Amount" onChange={expAmount}></input>
                    <br/><br/>
                    <button>Add Expense</button>
                    </form>

                </div>
            </div>

    )
}

export default Input;