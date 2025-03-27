// Create button component for play/pause, settings, and skip

import '../styles/Button.css';

const playBtnLogo = process.env.PUBLIC_URL + "/images/icons/ph_play-fill.png";

function Btn(props) {
    return (
        <button className='btn' style={{backgroundColor: props.bgColor, padding: props.btnPadding}}>
            <div className='btn-icon-container'>
                <img src={props.btnLogo}></img>
            </div>
        </button>
    );
}

export default Btn;