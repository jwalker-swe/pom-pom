// Create number spinner component for setting time interval for Focus, Short Break, and Long Break modes

import React, {useState, useEffect, useContext} from 'react';
import { GlobalStateContext } from '../GlobalState';

import '../styles/NumberSpinner.css';

const upArrow = process.env.PUBLIC_URL + '/images/icons/focus/settings-up-arrow.png';
const downArrow = process.env.PUBLIC_URL + '/images/icons/focus/settings-down-arrow.png';

function NumberSpinner(props) {
    // Get current mode and other states
    const {globalState, setGlobalState} = useContext(GlobalStateContext);
    const [focusTime, setFocusTime] = useState(25);
    const [shortTime, setShortTime] = useState(5);
    const [longTime, setLongTime] = useState(30);
    const mode = globalState.mode;

    // Set functions for getting timer values

    function increaseTime() {
        let time;

        if ( props.timeType === 'focus' ) {
            time = focusTime;
            time += 5;
            setFocusTime(time);
        } else if ( props.timeType === 'short-break' ) {
            time = shortTime;
            time += 5;
            setShortTime(time);
        } else {
            time = longTime;
            time += 5;
            setLongTime(time);
        }
    }

    function decreaseTime() {
        let time;

        if ( props.timeType === 'focus' ) {
            time = focusTime;
            time -= 5;
            setFocusTime(time);
        } else if ( props.timeType === 'short-break' ) {
            time = shortTime;
            time -= 5;
            setShortTime(time);
        } else {
            time = longTime;
            time -= 5;
            setLongTime(time);
        }
    }

    function changeTime(event) {
        if ( props.timeType === 'focus' ) {
            setFocusTime(Number(event.target.value));
        } else if ( props.timeType === 'short-break' ) {
            setShortTime(Number(event.target.value));
        } else {
            setLongTime(Number(event.target.value));
        }
    }

    
    if ( props.timeType === 'focus' ) {
        

        return (
            <div className='number-spinner'>
                <div className='btn-container'>
                    <img className='control down' src={downArrow} alt='down arrow' onClick={decreaseTime}/>
                </div>
                <input type='number' value={focusTime} onChange={changeTime}/>
                <div className='btn-container'>
                    <img className='control up' src={upArrow} alt='up arrow' onClick={increaseTime}/>
                </div>
            </div>
        );

    } else if ( props.timeType === 'short-break') {

        return (
            <div className='number-spinner'>
                <div className='btn-container'>
                    <img className='control down' src={downArrow} alt='down arrow' onClick={decreaseTime}/>
                </div>
                <input type='number' value={shortTime} onChange={changeTime}/>
                <div className='btn-container'>
                    <img className='control up' src={upArrow} alt='up arrow' onClick={increaseTime}/>
                </div>
            </div>
        )

    } else {

        return (
            <div className='number-spinner'>
                <div className='btn-container'>
                    <img className='control down' src={downArrow} alt='down arrow' onClick={decreaseTime}/>
                </div>
                <input type='number' value={longTime} onChange={changeTime}/>
                <div className='btn-container'>
                    <img className='control up' src={upArrow} alt='up arrow' onClick={increaseTime}/>
                </div>
            </div>
        )
    }
}

export default NumberSpinner;