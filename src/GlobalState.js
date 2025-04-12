// Create global states to be used across application
import React, {useState, useEffect, createContext} from 'react';

const GlobalStateContext = createContext();

let focusLength = localStorage.getItem('focus-length');
let shortLength = localStorage.getItem('short-length');
let longLength = localStorage.getItem('long-length');

if ( !focusLength ) {
    localStorage.setItem('focus-length', 25);
}

if ( !shortLength ) {
    localStorage.setItem('short-length', 5);
}

if ( !longLength ) {
    localStorage.setItem('long-length', 30);
}


const GlobalStateProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        mode: 'focus',
        duration: 25,
        nextMode: 'short-break',
        running: false,
        skipped: false,
        loop: 0,
        focusLength: localStorage.getItem('focus-length'),
        shortLength: localStorage.getItem('short-length'),
        longLength: localStorage.getItem('long-length')
    });

    const [settings, setSettings] = useState('hidden');

    return (
        <GlobalStateContext.Provider value={{ globalState, setGlobalState, settings, setSettings }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export { GlobalStateContext, GlobalStateProvider };