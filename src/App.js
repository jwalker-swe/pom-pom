

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


function App() {


  return (
      <div className="App" style={{backgroundColor: backgroundColor}}>
        <div className="Canvas">
          <Chip backgroundColor={backgroundColor} fontColor={fontColor} chipLogo={chipLogo} borderColor={chipBorderColor}/>
          <Timer duration={25 * 50} fontColor={fontColor} />
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
