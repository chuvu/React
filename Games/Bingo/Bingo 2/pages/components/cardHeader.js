import React from 'react';

export const CardHeader = () =>
    <div className="div-card-header">
        <HeaderLetter source= '../images/B.png' />
        <HeaderLetter source='../images/I.png' />
        <HeaderLetter source='../images/N.png' />
        <HeaderLetter source='../images/G.png' />
        <HeaderLetter source='../images/O.png' />
    </div>

const HeaderLetter = (props) =>
<div className='header-letter'><img className='img-letter' src={props.source}/></div>

/*
<div className='header-letter'><span>{props.letter}</span></div>
*/