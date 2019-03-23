import React from 'react';

export const StartButton = (props) => {
    
    const text = props.disabled ? "Good Luck!" : "Start";
    const color = props.disabled ? "RGB(55, 109, 232)" : "RGB(35, 89, 212)";

    return <button id='startButton' className="start-button" disabled={props.disabled} style={{backgroundColor: color}} onClick={props.startButtonClicked}>{text}</button>
}