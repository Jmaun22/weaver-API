import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// INital state

const initialState = {

    usersData: [
        {username: 'joe', x: [1,2,23,2,32,], y:[1,23,23,2,3], time: [23,123,12,3,42]}

    ]

}

export const GlobalContext = createContext(initialState);

// Provider componet 

export const GlobalProvider = ({ children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions


    function addUserData(userData) {
        dispatch({
            type: "ADD_USER",
            payload: userData
        });

    }

    return (<GlobalContext.Provider value={{
        usersData:state.usersData,
        addUserData
    }}>
    {children}
    </GlobalContext.Provider>);

}
