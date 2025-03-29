

import { useState, useEffect, useContext } from 'react';
import Chip from './components/Chip.js';
import Timer from './components/Timer.js';
import Btn from './components/Button.js';
import './styles/App.css';
import { GlobalStateProvider, GlobalStateContext } from './GlobalState';

let backgroundColor = 'rgba(255, 76, 76, 0.15)';
let mainBtnColor = 'rgba(255, 76, 76, 0.71)';
let secondaryBtnColor = 'rgba(255, 76, 76, 0.15)'
let fontColor = '#471515';
let chipBorderColor = '#471515';

let playBtnLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_play-fill.png';
let settingsBtnLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_dots-three-outline-fill.png';
let skipBtnLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_fast-forward-fill.png';

let chipLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_brain-fill.png';

let duration = (10);


function App() {


  const { globalState, setGlobalState } = useContext(GlobalStateContext);


  const setColor = () => {
    if ( globalState.mode === 'focus' ) {
        backgroundColor = 'rgba(255, 76, 76, 0.15)';
        mainBtnColor = 'rgba(255, 76, 76, 0.71)';
        secondaryBtnColor = 'rgba(255, 76, 76, 0.15)'
        fontColor = '#471515';

        if ( globalState.running == true ) {
          playBtnLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_play-fill.png';
        } else {
          playBtnLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_pause-fill.png';
        }
          settingsBtnLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_dots-three-outline-fill.png';
          skipBtnLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_fast-forward-fill.png';

          chipLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_brain-fill.png';
          

        chipBorderColor = '#471515';

        duration = (10);
    }

    if ( globalState.mode === 'short-break' ) {
        backgroundColor = 'rgba(77, 218, 110, 0.15)';
        mainBtnColor = 'rgba(77, 218, 110, 0.62)';
        secondaryBtnColor = 'rgba(77, 218, 110, 0.15)';
        fontColor = '#14401D';

        playBtnLogo = process.env.PUBLIC_URL + '/images/icons/short-break/ph_play-fill.png';
        settingsBtnLogo = process.env.PUBLIC_URL + '/images/icons/short-break/ph_dots-three-outline-fill.png';
        skipBtnLogo = process.env.PUBLIC_URL + '/images/icons/short-break/ph_fast-forward-fill.png';

        chipLogo = process.env.PUBLIC_URL + '/images/icons/short-break/ph_coffee.png';

        chipBorderColor = '#14401D';

        duration = (5);
    }
  }

  function changeIcon() {
    if ( globalState.running == false ) {
      if ( globalState.mode === 'focus' ) {
        playBtnLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_pause-fill.png';
      }
    } else {
      if ( globalState.mode === 'focus' ) {
        playBtnLogo = process.env.PUBLIC_URL + '/images/icons/focus/ph_play-fill.png';
      };
    }
  }

  useEffect( () => {
    setColor();
  }, [globalState.mode])

  useEffect ( () => {
    changeIcon();
  }, [globalState.running])


  return (
      <div className="App" style={{backgroundColor: backgroundColor}}>
        <div className="Canvas">
          <Chip backgroundColor={backgroundColor} fontColor={fontColor} chipLogo={chipLogo} borderColor={chipBorderColor}/>
          <Timer duration={duration} fontColor={fontColor} />
          <div className='btns-container'>
            <Btn btnType={'settings'} btnLogo={settingsBtnLogo} bgColor={secondaryBtnColor} btnPadding={'10px 20px'}/>
            <Btn btnType={'play-pause'} btnLogo={playBtnLogo} bgColor={mainBtnColor} btnPadding={'15px 30px'}/>
            <Btn btnType='skip' btnLogo={skipBtnLogo} bgColor={secondaryBtnColor} btnPadding={'10px 20px'}/>
          </div>
        </div>
      </div>
  );

}

export default App;
