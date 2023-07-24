import { createContext, useContext, useReducer } from "react";
// Prepares dataLayer
export const StateContext = createContext();

// Wrap our app and provide data layer

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
)

// get info from dataLayer

export const useStateValue = () => useContext(StateContext);