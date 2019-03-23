import React from 'react';

export const Card = (props) => {

    const card = props.card;        
    
    const populateCells = (array, i) =>
        array.map((cell, j) => <Cell key={j} column={i} row={j} number={cell.number} clicked={cell.drawn} cellClicked={props.cellClicked}/>);    

    const cells = card.map((column, i) => <div ckey={i} className="column">{populateCells(card[i], i)}</div>);

    return (
        <div className="card">
            {cells}
        </div>
    );
}

const Cell = (props) => {
    
    const image = props.clicked ? "url('./images/marked.png')" : "url('./images/tile.png')";
    
    return <div className="cell" style={ { backgroundImage: image } } onClick={() => props.cellClicked(props.number, props.column, props.row)}>{props.number}</div>
    
}

