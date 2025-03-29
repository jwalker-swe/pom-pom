// Create the timer that will change initial value based on inputs from user and current state user is in
import React, {useState, useEffect, useContext} from 'react';
import { GlobalStateContext } from '../GlobalState';
import '../styles/Timer.css';


function Timer(props) {
  const { globalState, setGlobalState } = useContext(GlobalStateContext);

  const [time, setTime] = useState(props.duration);

  useEffect(() => {
    if (time > 0 && globalState.running === true) {
      setTimeout(() => {
        setTime(time-1);
      }, 1000)
    } 
    if (time === 0) {
      setGlobalState(prevState => ({
        running: false,
        mode: 'short-break'
      }));
      console.log(`Current mode: ${globalState.mode}`)
    }
  }, [globalState.running, time])

  const getFormattedTime = (time) => {
    let totalSeconds = time;
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));

    let seconds = parseInt(totalSeconds % 60); 
    let minutes = parseInt(totalMinutes % 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    };

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    let formattedTime = {
      currentSeconds: seconds,
      currentMinutes: minutes
    }

    return formattedTime;
  }

  return (
    <div className='container timer-container'>
        <h1 className='timer-clock' style={{color: props.fontColor}}>
            <span className='minutes' style={{color: props.fontColor}}>{getFormattedTime(time).currentMinutes}</span>
            <span className='seconds' style={{color: props.fontColor}}>{getFormattedTime(time).currentSeconds}</span>
        </h1>
    </div>
  );
}

export default Timer;