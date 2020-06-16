import React, {createContext, useReducer} from 'react';
import AppReducer from  './AppReducer';

const initialState = {

transactions: [

    {id: 1, text: 'Flower', amount: 300 },
    {id: 1, text: 'Sale', amount: 300 },
    {id: 1, text: 'Shose', amount: 300 }
]
}


export const GlobalContext = createContext(initialState);




export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value = {{
            transactions: state.transactions
        }}>

            {children}

        </GlobalContext.Provider>
    )

}







