

import { useState, useEffect, useContext } from 'react';
import Chip from './components/Chip.js';
import Timer from './components/Timer.js';
import Btn from './components/Button.js';
import './styles/App.css';
import { GlobalStateProvider, GlobalStateContext } from './GlobalState';

const playBtnLogo = process.env.PUBLIC_URL + "/images/icons/ph_play-fill.png";
const settingsBtnLogo = process.env.PUBLIC_URL + '/images/icons/ph_dots-three-outline-fill.png';
const skipBtnLogo = process.env.PUBLIC_URL + '/images/icons/ph_fast-forward-fill.png';


let backgroundColor;
let mainBtnColor;
let secondaryBtnColor;
let fontColor;


function App() {


  const { globalState, setGlobalState } = useContext(GlobalStateContext);


  const setColor = () => {
    if ( globalState.mode === 'focus' ) {
        backgroundColor = 'rgba(255, 76, 76, 0.15)'
        mainBtnColor = 'rgba(255, 76, 76, 0.71)';
        secondaryBtnColor = 'rgba(255, 76, 76, 0.15)'
        fontColor = '#471515';
    }

    if ( globalState.mode === 'short-break' ) {
        backgroundColor = 'rgba(77, 218, 110, 0.15)';
        mainBtnColor = 'rgba(77, 218, 110, 0.62)';
        secondaryBtnColor = 'rgba(77, 218, 110, 0.15)';
        fontColor = '#14401D';
    }
  }

  useEffect( () => {
    setColor();
  }, [globalState.mode])


  return (
      <div className="App" style={{backgroundColor: backgroundColor}}>
        <div className="Canvas">
          <Chip backgroundColor={backgroundColor} fontColor={fontColor}/>
          <Timer duration={10} fontColor={fontColor} />
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
