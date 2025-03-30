// Create the timer that will change initial value based on inputs from user and current state user is in
import React, {useState, useEffect, useContext} from 'react';
import { GlobalStateContext } from '../GlobalState';
import '../styles/Timer.css';

let fontColor;


function Timer(props) {

  const { globalState, setGlobalState } = useContext(GlobalStateContext);

  if ( globalState.mode === 'focus' ) {
    fontColor = '#471515';
  }

  if ( globalState.mode === 'short-break' ) {
    fontColor = '#14401D';
  }

  if ( globalState.mode === 'long-break' ) {
    fontColor = '#153047';
  }

  return (
    <div className='container timer-container'>
        <h1 className='timer-clock' style={{color: fontColor}}>
            <span className='minutes' style={{color: fontColor}}>25</span>
            <span className='seconds' style={{color: fontColor}}>00</span>
        </h1>
    </div>
  );
}

export default Timer;