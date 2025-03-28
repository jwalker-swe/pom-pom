// Create button component for play/pause, settings, and skip
import React, {useState, useEffect, useContext} from 'react';
import { GlobalStateContext } from '../GlobalState';
import '../styles/Button.css';

const playBtnLogo = process.env.PUBLIC_URL + "/images/icons/ph_play-fill.png";

function Btn(props) {
    const { globalState, setGlobalState } = useContext(GlobalStateContext);

    function startTimer() {
        if (globalState.running === false) {
            setGlobalState(prevState => ({
                ...prevState,
                running: true
            }))
            console.log(`Current running state: ${globalState.running}`);
        }
        if (globalState.running === true) {
            setGlobalState(prevState => ({
                ...prevState,
                running: false
            }))
            console.log(`Current running state: ${globalState.running}`);
        }
    }

    return (
        <button onClick={startTimer} className='btn' style={{backgroundColor: props.bgColor, padding: props.btnPadding}}>
            <div className='btn-icon-container'>
                <img src={props.btnLogo}></img>
            </div>
        </button>
    );
}

export default Btn;