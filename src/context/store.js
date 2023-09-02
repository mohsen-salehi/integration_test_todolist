import { createContext, useReducer } from "react";
import { todoReducer } from "./reducers/todoReducer";

export const StoreContext = createContext([])

const initialSatte = {
    todo : []
}

export function StoreContextProvidor({children}) {
    const [state , dispatch ] = useReducer(todoReducer , initialSatte)

    const value = {
        state , dispatch
    }

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}