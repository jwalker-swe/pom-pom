import Chip from './components/Chip.js';
import Timer from './components/Timer.js';
import Btn from './components/Button.js';
import './styles/App.css';

const playBtnLogo = process.env.PUBLIC_URL + "/images/icons/ph_play-fill.png";
const settingsBtnLogo = process.env.PUBLIC_URL + '/images/icons/ph_dots-three-outline-fill.png';
const skipBtnLogo = process.env.PUBLIC_URL + '/images/icons/ph_fast-forward-fill.png';

let playBtnColor;
let btnColor;

playBtnColor = 'rgba(255, 76, 76, 0.71)';
btnColor = 'rgba(255, 76, 76, 0.15';


function App() {
  return (
    <div className="App">
      <div className="Canvas">
        <Chip />
        <Timer duration={25 * 60} />
        <div className='btns-container'>
          <Btn btnLogo={settingsBtnLogo} bgColor={btnColor} btnPadding={'10px 20px'}/>
          <Btn btnLogo={playBtnLogo} bgColor={playBtnColor} btnPadding={'15px 30px'}/>
          <Btn btnLogo={skipBtnLogo} bgColor={btnColor} btnPadding={'10px 20px'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
