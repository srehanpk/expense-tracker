import React, {useContext} from 'react';
import {GlobalContext} from './Context';



function Income  () {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    // const total = amounts.reduce((acc, item) => (acc += item), 0)
    // .toFixed(2);

    const inc =amounts
    .filter(item => item > 0)
     .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const exp = (amounts.filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)*-1)
    .toFixed(2);

    

    return (

            <div className="inc-exp">
                <div className="income"> 


                    <h3>Total Income  </h3> 
                
                    <span>$ {inc}</span>
                   
                    

                </div>


                <div className="expense"> 


                    <h3>Total Expense</h3>
                    
                    <span>$ {exp}</span>

                
                </div>
               
            </div>

    )
}

export default Income;