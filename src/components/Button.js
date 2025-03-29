// Create button component for play/pause, settings, and skip
import React, {useState, useEffect, useContext} from 'react';
import { GlobalStateContext } from '../GlobalState';
import '../styles/Button.css';

const playBtnLogo = process.env.PUBLIC_URL + "/images/icons/ph_play-fill.png";

let mainBtnColor;
let secondaryBtnColor;
let fontColor;

function Btn(props) {

    const { globalState, setGlobalState } = useContext(GlobalStateContext);
    

    const playPause = () => {
        if ( globalState.running === false ) {
            setGlobalState(prevState => ({
                ...prevState,
                running: true
            }))
        } else {
            setGlobalState(prevState => ({
                ...prevState,
                running: false
            }))
        }
    }


    if ( props.btnType === "play-pause" ) {
        return (
            <button onClick={playPause} className='btn' style={{backgroundColor: props.bgColor, padding: props.btnPadding}}>
                <div className='btn-icon-container'>
                    <img src={props.btnLogo}></img>
                </div>
            </button>
        ); 
    }

    if ( props.btnType === 'settings' ) {
        return (
            <button className='btn' style={{backgroundColor: props.bgColor, padding: props.btnPadding}}>
                <div className='btn-icon-container'>
                    <img src={props.btnLogo}></img>
                </div>
            </button>
        )
    }

    if ( props.btnType === 'skip' ) {
        return (
            <button className='btn' style={{backgroundColor: props.bgColor, padding: props.btnPadding}}>
                <div className='btn-icon-container'>
                    <img src={props.btnLogo}></img>
                </div>
            </button>
        )
    }
}

export default Btn;