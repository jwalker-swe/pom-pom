import React, {useState, useEffect, useContext} from 'react';
import { GlobalStateContext } from '../GlobalState';
import '../styles/Settings.css';

import NumberSpinner from './NumberSpinner';

const exitBtn = process.env.PUBLIC_URL + '/images/icons/focus/exit.png';

function Settings() {

    // Get globalState
    const { globalState, setGlobalState } = useContext(GlobalStateContext);
    const { settings, setSettings } = useContext(GlobalStateContext);

    let visibility = settings;

    function closeSettings() {
        setSettings('hidden');
    }

    return (
        <div className='settings-container' style={{visibility: visibility}}>
            <div className='settings-header'>
                <h2 className='settings-heading'>Settings</h2>
                <div className='exit-container' onClick={closeSettings}>                
                    <img src={exitBtn} alt='exit button'/>
                </div>
            </div>
            <div className='setting-options'>
                <div className='option-container'>
                    <h3 className='focus-length'>Focus length</h3>
                    <NumberSpinner timeType={'focus'}/>
                </div>
                <div className='option-container'>
                    <h3 className='short-break-length'>Short break length</h3>
                    <NumberSpinner timeType={'short-break'}/>
                </div>
                <div className='option-container'>
                    <h3 className='long-break-length'>Long break length</h3>
                    <NumberSpinner timeType={'long-break'}/>
                </div>
                <div className='option-container'>
                    <h3 className='auto-resume'>Auto resume timer</h3>
                    <label className='switch' id='auto-resume-switch'>
                        <input type='checkbox' id='auto-resume-checkbox'></input>
                        <span className='slider round' id='auto-resume-slider'></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Settings