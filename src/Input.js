import React, {useState, useContext} from 'react';
import {GlobalContext} from './Context';



function Input  () {

        const context = useContext(GlobalContext);

        console.log(context);


     const [incText, setIncText] = useState("");
     const [incAmount, setIncAmount] = useState("");

     const [expText, setExpText] = useState("");
     const [expAmount, setExpAmount] = useState("");
   
    return (

            <div className="form">


                <div className="plus">
                    
                    <li></li>
                    
                        <br/> 
                    <form >
                    <b>Description</b><input type = "text" value={incText} onChange={(e)=>setIncText(e.target.value)}  placeholder="input text" ></input>
  
                    <br/>
                    <b>Amount</b><input type = "text" value={incAmount} onChange={(e)=>setIncAmount(e.target.value)} placeholder="Input Amount" ></input>
                    <br/><br/>
                    <button>Add Income</button>
                    </form>

                </div>


                <div className="minus"> 

                    <li></li>

                    <br/>
                    <form>
                    <b>Description</b><input type = "text" value={expText} onChange={(e)=>setExpText(e.target.value)} placeholder="input text" ></input>

                    <br/> 
                    <b>Amount</b><input type = "text" value={expAmount} onChange={(e)=>setExpAmount(e.target.value)} placeholder="Input Amount" ></input>
                    <br/><br/>
                    <button>Add Expense</button>
                    </form>

                </div>
            </div>

    )
}

export default Input;