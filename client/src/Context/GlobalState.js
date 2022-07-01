import React, { createContext, useReducer } from 'react';

// INital state

const initialState = {

    userData: [
        {username, x: [1,2,23,2,32,], y:[1,23,23,2,3], time: [23,123,12,3,42]}

    ]

}

export const GlobalContext = createContext(initialState);

// Provider componet 

export const GlobalProvider = ({ children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    return (<GlobalContext.Provider value={{
        userData:state.userData
    }}>
    {children}
    </GlobalContext.Provider>);

}