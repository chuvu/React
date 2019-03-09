import React from 'react';
import Board from './board.js';
import GameController from './gameController.js';

class App extends React.Component {
	
	state = {
		cardColor: 'white',
		streetName: '',
		price: 0
	};

  	render() {
		const {cardColor, streetName, price} = this.state;  		
  		
		return (
			<div>
				<Board updateCard={this.updateCard} />
				<GameController cardColor={cardColor} streetName={streetName} price={price} />
			</div>      		    
		);
  	}
  
  	updateCard = (cardColor, streetName, price) => {  		
  		this.setState({
  			cardColor: cardColor,
			streetName: streetName,
			price: price
  		});	
  	}
}

export default App;
