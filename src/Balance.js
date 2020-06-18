import React, {useContext} from 'react';
import {GlobalContext} from './Context';








function Balance  () {

    const {transaction} = useContext(GlobalContext);
    const amounts = transaction.map(transaction => transaction.amount);
    
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    

    return (
            
        
       
            <div className="balance">

                <h2>Your Current Balance   </h2>
          
                <span>${total}</span>
               

            </div>

        
            
    )
}

export default Balance;