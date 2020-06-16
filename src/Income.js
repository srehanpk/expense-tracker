import React, {useContext} from 'react';
import {incomeContext} from './Context';
import {expenseContext} from './Context';


function Income  () {

        let income = useContext(incomeContext);
        let expense = useContext(expenseContext);

    return (

            <div className="add">
                <div className="income"> 


                    <h2>Total Income  </h2> 
                
                    <span>${income}</span>
                   
                    

                </div>


                <div className="expense"> 


                    <h2>Total Expense</h2>
                    
                    <span>${expense}</span>

                
                </div>
               
            </div>

    )
}

export default Income;