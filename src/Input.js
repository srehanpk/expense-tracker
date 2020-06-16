import React from 'react';





function Input  () {
      
   

    return (

            <div className="form">


                <div className="plus"> 

                    <b>Discription</b><input type = "text"></input>
  
                    <br/>
                    <b>Amount</b><input type = "text"></input>
                    <br/><br/>
                    <button>Add Income</button>
                    

                </div>


                <div className="minus"> 

                    <b>Discription</b><input type = "text"></input>

                    <br/> 
                    <b>Amount</b><input type = "text"></input>
                    <br/><br/>
                    <button>Add Expense</button>

                
                </div>
            </div>

    )
}

export default Input;