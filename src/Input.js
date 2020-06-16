import React from 'react';



function Input  () {

    
   
    return (

            <div className="form">


                <div className="plus">
                    
                    <li></li>
                    
                        <br/> 
                    <form >
                    <b>Description</b><input type = "text" placeholder="input text" ></input>
  
                    <br/>
                    <b>Amount</b><input type = "text" placeholder="Input Amount" ></input>
                    <br/><br/>
                    <button>Add Income</button>
                    </form>

                </div>


                <div className="minus"> 

                    <li></li>

                    <br/>
                    <form>
                    <b>Description</b><input type = "text" placeholder="input text" ></input>

                    <br/> 
                    <b>Amount</b><input type = "text" placeholder="Input Amount" ></input>
                    <br/><br/>
                    <button>Add Expense</button>
                    </form>

                </div>
            </div>

    )
}

export default Input;