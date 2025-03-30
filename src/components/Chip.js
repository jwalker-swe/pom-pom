// Create the chip component that tells you which state  you're currently in: Focus, Short Break, or Long Break
import React, {useState, useEffect, useContext} from 'react';
import { GlobalStateContext } from '../GlobalState';
import '../styles/Chip.css';

const iconStateFocus = process.env.PUBLIC_URL + "/images/icons/ph_brain-fill.png";
const iconStateShortBreak = process.env.PUBLIC_URL + '/images/icons/state/icon-state-short-break.png';
const iconStateLongBreak = process.env.PUBLIC_URL + '/images/icons/state/icon-state-long-break.png';

let backgroundColor;
let mainBtnColor;
let secondaryBtnColor;
let fontColor;
let chipBorderColor;

function Chip(props) {

    const { globalState, setGlobalState } = useContext(GlobalStateContext);

    if ( globalState.mode === 'focus' ) {
        backgroundColor = 'rgba(255, 76, 76, 0.15)';
        mainBtnColor = 'rgba(255, 76, 76, 0.71)';
        secondaryBtnColor = 'rgba(255, 76, 76, 0.15)'
        fontColor = '#471515';
        chipBorderColor = '#471515';
   }

   if ( globalState.mode === 'short-break') {
       backgroundColor = 'rgba(77, 218, 110, 0.15)';
       mainBtnColor = 'rgba(77, 218, 110, 0.62)';
       secondaryBtnColor = 'rgba(77, 218, 110, 0.15)';
       fontColor = '#14401D';
       chipBorderColor = '#14401D';
   }

   if ( globalState.mode === 'long-break' ) {
       backgroundColor = 'rgba(76, 172, 255, 0.15)';
       mainBtnColor = 'rgba(76, 172, 255, 0.62)';
       secondaryBtnColor = 'rgba(76, 172, 255, 0.15)';
       fontColor = '#153047';
       chipBorderColor = '#153047';
   }

    if ( globalState.mode === 'focus' ) {
        return (
            <div className="container chip-main-container" style={{backgroundColor: backgroundColor, borderColor: props.borderColor}}>
                <div className='chip-secondary-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="chip-icon-container" style={{width: 32, height: 32, marginRight: 8}}>
                        <img className="focus-icon" src={props.chipLogo} style={{width: 28, height: 28}}></img>
                    </div>
                    <h1 className="heading chip-heading" style={{color: props.fontColor}}>Focus</h1>
                </div>
            </div>
        );
    } 

    if ( globalState.mode === 'short-break' ) {
        return (
            <div className="container chip-main-container" style={{backgroundColor: backgroundColor, borderColor: props.borderColor}}>
                <div className='chip-secondary-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="chip-icon-container" style={{width: 32, height: 32, marginRight: 8}}>
                        <img className="focus-icon" src={props.chipLogo} style={{width: 28, height: 28}}></img>
                    </div>
                    <h1 className="heading chip-heading" style={{color: props.fontColor}}>Short Break</h1>
                </div>
            </div>
        );
    }

    if ( globalState.mode === 'long-break' ) {
        return (
            <div className="container chip-main-container" style={{backgroundColor: backgroundColor, borderColor: props.borderColor}}>
                <div className='chip-secondary-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="chip-icon-container" style={{width: 32, height: 32, marginRight: 8}}>
                        <img className="focus-icon" src={props.chipLogo} style={{width: 28, height: 28}}></img>
                    </div>
                    <h1 className="heading chip-heading" style={{color: props.fontColor}}>Short Break</h1>
                </div>
            </div>
        );
    }
}

export default Chip;