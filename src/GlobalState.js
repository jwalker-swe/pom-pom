// Create global states to be used across application
import React, {useState, useEffect, createContext} from 'react';

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        mode: 'focus',
        duration: 25,
        nextMode: 'short-break',
        running: false,
        skipped: false,
        loop: 0
    });

    const [settings, setSettings] = useState('hidden');

    return (
        <GlobalStateContext.Provider value={{ globalState, setGlobalState, settings, setSettings }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export { GlobalStateContext, GlobalStateProvider };