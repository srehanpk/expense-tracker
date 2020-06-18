import React, {createContext, useReducer} from 'react';
import AppReducer from  './AppReducer';

const initialState = {

transactions: [

    {id: 1, text: 'Flower', amount: 300 },
    {id: 2, text: 'Sale', amount: -400 },
    {id: 3, text: 'Shoes', amount: 300 }
]
}


export const GlobalContext = createContext(initialState);




export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);


            function del(id) {

                dispatch({
                    type: "Delete_Item",
                    payload: id
                });
            }

    return (
        <GlobalContext.Provider value = {{
            transactions: state.transactions,
            del
        }}>

            {children}

        </GlobalContext.Provider>
    )

}







