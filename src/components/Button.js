// Create button component for play/pause, settings, and skip
import React, {useState, useEffect, useContext} from 'react';
import { GlobalStateContext } from '../GlobalState';
import '../styles/Button.css';

let playBtnLogo;
let pauseBtnLogo;
let settingsBtnLogo;
let skipBtnLogo;

let backgroundColor;
let mainBtnColor;
let secondaryBtnColor;
let fontColor;
let chipBorderColor;

function Btn(props) {

    // Get globalState
    const { globalState, setGlobalState } = useContext(GlobalStateContext);
    const { settings, setSettings } = useContext(GlobalStateContext);


    // Set variables based on globalState.mode and globalState.running
    if ( globalState.mode === 'focus' ) {
        backgroundColor = 'rgba(255, 76, 76, 0.15)';
        mainBtnColor = 'rgba(255, 76, 76, 0.71)';
        secondaryBtnColor = 'rgba(255, 76, 76, 0.15)'
        fontColor = '#471515';
        chipBorderColor = '#471515';

        let running = globalState.running;

        playBtnLogo = running ? process.env.PUBLIC_URL + "/images/icons/focus/ph_pause-fill.png" : process.env.PUBLIC_URL + "/images/icons/focus/ph_play-fill.png";

        settingsBtnLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_dots-three-outline-fill.png';

        skipBtnLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_fast-forward-fill.png';
    
    }

    if ( globalState.mode === 'short-break') {
        backgroundColor = 'rgba(77, 218, 110, 0.15)';
        mainBtnColor = 'rgba(77, 218, 110, 0.62)';
        secondaryBtnColor = 'rgba(77, 218, 110, 0.15)';
        fontColor = '#14401D';
        chipBorderColor = '#14401D';

        let running = globalState.running;

        playBtnLogo = running ? process.env.PUBLIC_URL + "/images/icons/short-break/ph_pause-fill.png" : process.env.PUBLIC_URL + "/images/icons/short-break/ph_play-fill.png";

        settingsBtnLogo = process.env.PUBLIC_URL + '/images/icons/short-break/ph_dots-three-outline-fill.png';

        skipBtnLogo = process.env.PUBLIC_URL + '/images/icons/short-break/ph_fast-forward-fill.png';
    }

    if ( globalState.mode === 'long-break' ) {
        backgroundColor = 'rgba(76, 172, 255, 0.15)';
        mainBtnColor = 'rgba(76, 172, 255, 0.62)';
        secondaryBtnColor = 'rgba(76, 172, 255, 0.15)';
        fontColor = '#153047';
        chipBorderColor = '#153047';

        let running = globalState.running;

        playBtnLogo = running ? process.env.PUBLIC_URL + "/images/icons/long-break/ph_pause-fill.png" : process.env.PUBLIC_URL + "/images/icons/long-break/ph_play-fill.png";

        settingsBtnLogo = process.env.PUBLIC_URL + '/images/icons/long-break/ph_dots-three-outline-fill.png';

        skipBtnLogo = process.env.PUBLIC_URL + '/images/icons/long-break/ph_fast-forward-fill.png';
    }


    function startTimer() {
        let running = globalState.running;

        running = running ? false : true;

        setGlobalState(prepState => ({
            ...prepState,
            running: running
        }))
    }

    function changeMode() {
        let mode = globalState.mode;
        let nextMode = globalState.nextMode;
        let loop = globalState.loop;

        if ( mode === 'focus' ) {
            if ( loop < 3 ) {
                setGlobalState(prepState => ({
                    ...prepState,
                    mode: 'short-break',
                    nextMode: 'focus',
                    running: false,
                    skipped: true
                }))
            } else {
                setGlobalState(prepState => ({
                    ...prepState,
                    mode: 'long-break',
                    nextMode: 'focus',
                    running: false,
                    skipped: true,
                    loop: loop
                }))
                console.log(`Loop value: ${globalState.loop}`);
            }
        } 

        if ( mode === 'short-break') {
            if ( loop < 4 ) {
                loop++;
                setGlobalState(prepState => ({
                    ...prepState,
                    mode: 'focus',
                    nextMode: 'short-break',
                    running: false,
                    skipped: true,
                    loop: loop
                }))
                console.log(`Loop value: ${globalState.loop}`)
            }
        }

        if ( mode === 'long-break' ) {
            loop = 0;
            setGlobalState(prepState => ({
                ...prepState,
                mode: 'focus',
                nextMode: 'short-break',
                running: false,
                skipped: true,
                loop: loop
            }))
            console.log(`Loop value: ${globalState.loop}`)
        }
    }

    function openSettings() {
        setSettings('visible');

        setGlobalState(prepState => ({
            ...prepState,
            running: false
        }))
    }

    // Generate components based on conditionals

    if (props.btnType === 'play-pause') {
        return (
            <button onClick={startTimer} className='btn' style={{backgroundColor: mainBtnColor, padding: props.btnPadding}}>
                <div className='btn-icon-container'>
                    <img src={playBtnLogo}></img>
                </div>
            </button>
        ); 
    }

    if (props.btnType === 'settings') {
        return (
            <button onClick={openSettings}  className='btn' style={{backgroundColor: secondaryBtnColor, padding: props.btnPadding}}>
                <div className='btn-icon-container'>
                    <img src={settingsBtnLogo}></img>
                </div>
            </button>
        ); 
    }

    if (props.btnType === 'skip') {
        return (
            <button onClick={changeMode} className='btn' style={{backgroundColor: secondaryBtnColor, padding: props.btnPadding}}>
                <div className='btn-icon-container'>
                    <img src={skipBtnLogo}></img>
                </div>
            </button>
        ); 
    }
    
}

export default Btn;