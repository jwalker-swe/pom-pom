// Create the timer that will change initial value based on inputs from user and current state user is in


import '../styles/Timer.css';

let startingMinutes = 25;
let secondsRemaining = startingMinutes * 60;

const countdown = function() {
  const minutes = Math.floor(secondsRemaining / 60);
  let seconds = secondsRemaining % 60;

  secondsRemaining--;
}



function Timer() {
  return (
    <div className='container timer-container'>
        <h1 className='timer-clock'>
            <span className='minutes'>25</span>
            <span className='seconds'>00</span>
        </h1>
    </div>
  );
}

export default Timer;