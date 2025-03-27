// Create the timer that will change initial value based on inputs from user and current state user is in
import React, {useState, useEffect} from 'react';
import '../styles/Timer.css';


function Timer({ duration }) {

  const [state, setState] = useState('Focus');
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      if (time > 0) {
        setTime(time-1);
      };
      if (time === 0) {
        setState('Short Break');
      }
    }, 1000)
  }, [time])

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
        <h1 className='timer-clock'>
            <span className='minutes'>{getFormattedTime(time).currentMinutes}</span>
            <span className='seconds'>{getFormattedTime(time).currentSeconds}</span>
        </h1>
    </div>
  );
}

export default Timer;