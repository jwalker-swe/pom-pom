// Create global states to be used across application
import React, {useState, useEffect, createContext} from 'react';

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        mode: 'focus',
        running: false,
    });

    return (
        <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export { GlobalStateContext, GlobalStateProvider };