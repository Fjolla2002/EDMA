import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
    lang: localStorage.getItem("lang") || "en",
    users: JSON.parse(localStorage.getItem("users")) || [],
    user: localStorage.getItem("users") || null
};

const Language = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);

export default Language;