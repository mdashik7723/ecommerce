import React, {useContext} from "react";
import {createContext} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    return(
        <>
        <AppContext.Provider value={{myName:"As Hi K"}}>
            {children}
        </AppContext.Provider>;
        </>
    )
};
//custom hook

const useProductContext = () => {
    return useContext(AppContext);
};


export {AppProvider};
export {AppContext, useProductContext};