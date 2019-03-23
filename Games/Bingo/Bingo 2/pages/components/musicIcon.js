import React from 'react';

export const MusicIcon = (props) => {

    const source = props.musicOn ? '../images/music-on.png' : '../images/music-off.png';

    return <img class='music-icon' onClick={props.musicOnOff} src={source} />
}