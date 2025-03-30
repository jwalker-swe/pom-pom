// Create the timer that will change initial value based on inputs from user and current state user is in
import React, {useState, useEffect, useContext} from 'react';
import { GlobalStateContext } from '../GlobalState';
import '../styles/Timer.css';

let fontColor;
let fontWeight;


function Timer(props) {

  // Get globalState and set time
  const { globalState, setGlobalState } = useContext(GlobalStateContext);
  const [ time, setTime ] = useState(props.duration);

  let running = globalState.running;
  let mode = globalState.mode;

  if ( globalState.mode === 'focus' ) {
    fontColor = '#471515';
  }

  if ( globalState.mode === 'short-break' ) {
    fontColor = '#14401D';
  }

  if ( globalState.mode === 'long-break' ) {
    fontColor = '#153047';
  }



  fontWeight = running ? 'bold' : 'normal';


  useEffect(() => {

    if ( running ) {
      setTimeout(() => {
        if (time > 0) {
          setTime(time-1);
        }
      }, 1000)
    }

    if ( time === 0 ) {
      setGlobalState(prepState => ({
        ...prepState,
        mode: 'short-break'
      }))
    }

    

  }, [time, running])

  const formatTime = (time) => {
    let totalSeconds = time;
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));

    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);

    if ( seconds < 10 ) {
      seconds = '0' + seconds;
    }

    if ( minutes < 10 ) {
      minutes = '0' + minutes;
    }

    let formattedTime = {
      currentMinutes: minutes,
      currentSeconds: seconds
    }

    return formattedTime;
  }





  return (
    <div className='container timer-container'>
        <h1 className='timer-clock' style={{color: fontColor, fontWeight: fontWeight}}>
            <span className='minutes' style={{color: fontColor}}>{formatTime(time).currentMinutes}</span>
            <span className='seconds' style={{color: fontColor}}>{formatTime(time).currentSeconds}</span>
        </h1>
    </div>
  );
}

export default Timer;