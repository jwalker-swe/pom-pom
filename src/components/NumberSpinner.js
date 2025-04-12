// Create number spinner component for setting time interval for Focus, Short Break, and Long Break modes

import React, {useState, useEffect, useContext} from 'react';
import { GlobalStateContext } from '../GlobalState';

import '../styles/NumberSpinner.css';

const upArrow = process.env.PUBLIC_URL + '/images/icons/focus/settings-up-arrow.png';
const downArrow = process.env.PUBLIC_URL + '/images/icons/focus/settings-down-arrow.png';

function NumberSpinner(props) {
    // Get current mode and other states
    const { globalState, setGlobalState } = useContext(GlobalStateContext);

    const mode = globalState.mode;

    const focusTime = Number(localStorage.getItem('focus-length'));
    const shortTime = Number(localStorage.getItem('short-length'));
    const longTime = Number(localStorage.getItem('long-length'));

    // Set functions for getting timer values

    function increaseTime() {
        let time;

        if ( props.timeType === 'focus' ) {
            time = focusTime;
            time += 5;
            setGlobalState(prepState => ({
                ...prepState,
                focusLength: time
            }))
            localStorage.setItem('focus-length', time);
        } else if ( props.timeType === 'short-break' ) {
            time = shortTime;
            time += 5;
            setGlobalState(prepState => ({
                ...prepState,
                shortLength: time
            }))
            localStorage.setItem('short-length', time);
        } else {
            time = longTime;
            time += 5;
            setGlobalState(prepState => ({
                ...prepState,
                longLength: time
            }))
            localStorage.setItem('long-length', time);
        }
    }

    function decreaseTime() {
        let time;

        if ( props.timeType === 'focus' ) {
            time = focusTime;
            time -= 5;
            setGlobalState(prepState => ({
                ...prepState,
                focusLength: time
            }))
            localStorage.setItem('focus-length', time);
        } else if ( props.timeType === 'short-break' ) {
            time = shortTime;
            time -= 5;
            setGlobalState(prepState => ({
                ...prepState,
                shortLength: time
            }))
            localStorage.setItem('short-length', time);
        } else {
            time = longTime;
            time -= 5;
            setGlobalState(prepState => ({
                ...prepState,
                longLength: time
            }))
            localStorage.setItem('long-length', time);
        }
    }

    function changeTime(event) {
        if ( props.timeType === 'focus' ) {
            setGlobalState(prepState => ({
                ...prepState,
                focusLength: Number(event.target.value)
            }))
            localStorage.setItem('focus-length', Number(event.target.value));
        } else if ( props.timeType === 'short-break' ) {
            setGlobalState(prepState => ({
                ...prepState,
                shortLength: Number(event.target.value)
            }))
            localStorage.setItem('short-length', Number(event.target.value));
        } else {
            setGlobalState(prepState => ({
                ...prepState,
                longLength: Number(event.target.value)
            }))
            localStorage.setItem('long-length', Number(event.target.value));
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