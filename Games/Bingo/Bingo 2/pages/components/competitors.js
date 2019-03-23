import React from 'react';

export const Competitors = (props) => {
    
    const competitorCards = props.competitors.map((competitor, i) => 
        <CompetitorCard competitorCard={competitor.card} competitorName={competitor.name}/>
    );

    return(
        <div className="competitors-cards">
            <h2>{props.text}</h2>
            {competitorCards}
        </div>
    );
}

const CompetitorCard = (props) => {

    return (
        <table className='competitor-card'>            
            <caption>{props.competitorName}</caption>
                <Row row={0} competitorCard={props.competitorCard}/>
                <Row row={1} competitorCard={props.competitorCard}/>
                <Row row={2} competitorCard={props.competitorCard}/>
                <Row row={3} competitorCard={props.competitorCard}/>
                <Row row={4} competitorCard={props.competitorCard}/>
        </table>
    );
}

const Row = (props) => {

    //read a row from all the columns (element at 'i' from all the array's rows (which in fact are the card's columns))
    let row = [];
    let number;

    for(let i = 0; i < 5; i++)
        row.push(props.competitorCard[i][props.row]);
    
    row = row.map((cell, n) => {
        
        return <TD key={n} cell={cell} />

    });

    return(
        <tr>{row}</tr>
    );
    
}

const TD = (props) => {
    const color = props.cell.drawn === true ? "RGB(176, 28, 28)" : "burlywood";
    
    return <td style={{backgroundColor: color }}>{props.cell.number}</td>
}