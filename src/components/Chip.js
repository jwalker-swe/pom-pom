// Create the chip component that tells you which state  you're currently in: Focus, Short Break, or Long Break

import '../styles/Chip.css';

const iconStateFocus = process.env.PUBLIC_URL + "/images/icons/ph_brain-fill.png";
const iconStateShortBreak = process.env.PUBLIC_URL + '/images/icons/state/icon-state-short-break.png';
const iconStateLongBreak = process.env.PUBLIC_URL + '/images/icons/state/icon-state-long-break.png';

function Chip() {
    return (
        <div className="container chip-main-container" style={{}}>
            <div className='chip-secondary-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="chip-icon-container" style={{width: 32, height: 32, marginRight: 10}}>
                    <img className="focus-icon" src={iconStateFocus}></img>
                </div>
                <h1 className="heading chip-heading" style={{color: '#471515'}}>Focus</h1>
            </div>
        </div>
    );
}

export default Chip;