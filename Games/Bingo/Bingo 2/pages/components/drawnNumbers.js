import React from 'react';

export const DrawnNumbers = (props) => {
    
    let drawnNumbers = props.drawnNumbers.slice();
    
    for(let i = 0; i < drawnNumbers.length; i++)
        if (drawnNumbers[i] >= 1 && drawnNumbers[i] <= 15)
            drawnNumbers[i] = '../images/' + 'B' + drawnNumbers[i] + '.png';
        else if  (drawnNumbers[i] >= 16 && drawnNumbers[i] <= 30)
            drawnNumbers[i] = '../images/' + 'I' + drawnNumbers[i] + '.png';
        else if  (drawnNumbers[i] >= 31 && drawnNumbers[i] <= 45)
            drawnNumbers[i] = '../images/' + 'N' + drawnNumbers[i] + '.png';
        else if  (drawnNumbers[i] >= 46 && drawnNumbers[i] <= 60)
            drawnNumbers[i] = '../images/' + 'G' + drawnNumbers[i] + '.png';
        else if  (drawnNumbers[i] >= 61 && drawnNumbers[i] <= 75)
            drawnNumbers[i] = '../images/' + 'O' + drawnNumbers[i] + '.png';
    
    drawnNumbers = drawnNumbers.map((number, i) => 
        <div className="drawn-number"><img className={"ball-image" + i} src={number}/></div>      
    );    
    
    return <div className="drawn-numbers">{drawnNumbers}</div>
}
