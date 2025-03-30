// Create the timer that will change initial value based on inputs from user and current state user is in
import React, {useState, useEffect, useContext} from 'react';
import { GlobalStateContext } from '../GlobalState';
import '../styles/Timer.css';


function Timer(props) {

  const { globalState, setGlobalState } = useContext(GlobalStateContext);

  return (
    <div className='container timer-container'>
        <h1 className='timer-clock' style={{color: props.fontColor}}>
            <span className='minutes' style={{color: props.fontColor}}>25</span>
            <span className='seconds' style={{color: props.fontColor}}>00</span>
        </h1>
    </div>
  );
}

export default Timer;