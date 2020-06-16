import React, {useContext} from 'react';
import {balanceContext} from './Context';






function Balance  () {

    let balance = useContext(balanceContext);


    return (
            
       
            <div className="balance">

                <h2>Your Current Balance   </h2>
          
                <span>${balance}</span>
               

            </div>
            
    )
}

export default Balance;