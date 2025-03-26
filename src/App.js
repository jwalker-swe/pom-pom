import Chip from './components/Chip.js';
import Timer from './components/Timer.js';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="Canvas">
        <Chip />
        <Timer />
      </div>
    </div>
  );
}

export default App;
