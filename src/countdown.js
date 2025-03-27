// Create 




let startingMinutes = 25;
let secondsRemaining = startingMinutes * 60;

const countdown = function() {
  const minutes = Math.floor(secondsRemaining / 60);
  let seconds = secondsRemaining % 60;

  if ( seconds < 10 ) {
    seconds = '0' + seconds;
  } else {
    seconds = seconds;
  }

  secondsRemaining--;
}
