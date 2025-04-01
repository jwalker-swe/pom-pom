

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

let duration;


function App() {

  const { globalState, setGlobalState } = useContext(GlobalStateContext);

  let mode = globalState.mode;

  if ( globalState.mode === 'focus' ) {
    backgroundColor = 'rgba(255, 76, 76, 0.15)';
  }

  if ( globalState.mode === 'short-break' ) {
    backgroundColor = 'rgba(77, 218, 110, 0.15)';
  }

  if ( globalState.mode === 'long-break' ) {
    backgroundColor = 'rgba(76, 172, 255, 0.15)';
  }

  if ( mode === 'focus' ) {
    return (
        <div className="App" style={{backgroundColor: backgroundColor}}>
          <div className="Canvas">
            <Chip backgroundColor={backgroundColor} fontColor={fontColor} chipLogo={chipLogo} borderColor={chipBorderColor}/>
            <Timer duration={25 * 60} fontColor={fontColor} />
            <div className='btns-container'>
              <Btn btnType={'settings'} btnLogo={settingsBtnLogo} bgColor={secondaryBtnColor} btnPadding={'10px 20px'}/>
              <Btn btnType={'play-pause'} btnLogo={playBtnLogo} bgColor={mainBtnColor} btnPadding={'15px 30px'}/>
              <Btn btnType='skip' btnLogo={skipBtnLogo} bgColor={secondaryBtnColor} btnPadding={'10px 20px'}/>
            </div>
          </div>
        </div>
    );
  }

  if ( mode === 'short-break' ) {
    return (
      <div className="App" style={{backgroundColor: backgroundColor}}>
        <div className="Canvas">
          <Chip backgroundColor={backgroundColor} fontColor={fontColor} chipLogo={chipLogo} borderColor={chipBorderColor}/>
          <Timer duration={5 * 60} fontColor={fontColor} />
          <div className='btns-container'>
            <Btn btnType={'settings'} btnLogo={settingsBtnLogo} bgColor={secondaryBtnColor} btnPadding={'10px 20px'}/>
            <Btn btnType={'play-pause'} btnLogo={playBtnLogo} bgColor={mainBtnColor} btnPadding={'15px 30px'}/>
            <Btn btnType='skip' btnLogo={skipBtnLogo} bgColor={secondaryBtnColor} btnPadding={'10px 20px'}/>
          </div>
        </div>
      </div>
  );
  }

  if ( mode === 'long-break' ) {
    return (
      <div className="App" style={{backgroundColor: backgroundColor}}>
        <div className="Canvas">
          <Chip backgroundColor={backgroundColor} fontColor={fontColor} chipLogo={chipLogo} borderColor={chipBorderColor}/>
          <Timer duration={30 * 60} fontColor={fontColor} />
          <div className='btns-container'>
            <Btn btnType={'settings'} btnLogo={settingsBtnLogo} bgColor={secondaryBtnColor} btnPadding={'10px 20px'}/>
            <Btn btnType={'play-pause'} btnLogo={playBtnLogo} bgColor={mainBtnColor} btnPadding={'15px 30px'}/>
            <Btn btnType='skip' btnLogo={skipBtnLogo} bgColor={secondaryBtnColor} btnPadding={'10px 20px'}/>
          </div>
        </div>
      </div>
  );
  }

}

export default App;
