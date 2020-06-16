import React, {createContext, useReducer} from 'react';
import AppReducer from  './AppReducer';

const iniState = {

initState: [

    {id: 1, text: 'Flower', amount: 300 },
    {id: 1, text: 'Sale', amount: 300 },
    {id: 1, text: 'Shose', amount: 300 }
]
}


export const Context = createContext(iniState);




export const GlobalProvider = ({child}) => {

    const [state, dispatch] = useReducer(AppReducer, iniState);

    return (
        <Context.Provider value = {{
            initState: state.initState
        }}>

            {child}

        </Context.Provider>
    )

}







