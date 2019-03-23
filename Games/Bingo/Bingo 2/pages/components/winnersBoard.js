import React from 'react';

export const WinnersBoard = (props) => {

    let winners = props.winners.slice();
    
    if (winners.length > 14) 
        winners = winners.splice(winners.length - 14, 14);
    
    winners = winners.map((winner, i) => 
        <div className="winner" key={i}><span>{winner}</span></div>
    );

    return (
        <div className="winners-board">
            <div className="winners-list">                
                <p className="left">{props.winnersLeft} left</p>
                {winners}       
            </div>
        </div>
    );
}