import React from 'react'
import './dices.css'

class Dices extends React.Component {

	constructor() {
		super();
		this.state = {
			dice1: '&#9856;',
			dice2: '&#9856;',
			rolls: 0
        }        
	}

	rollDices = () => {
		this.setState({
			rolls: 0
		})

        this.timer = setInterval(this.changeDices, 100)
	}

	changeDices = () => {
		const dice1 = Math.floor(Math.random() * 6 + 1)
		const dice2 = Math.floor(Math.random() * 6 + 1)
		this.setState({
			dice1: dice1,
			dice2: dice2,
			rolls: this.state.rolls + 1
		})

		this.state.rolls === 1 &&
			clearInterval(this.timer)
	}

	calculateCodeDice(diceNumber) {
		let codeDice = '\u2680'

		if (diceNumber === 1) {
			if (this.state.dice1 === 2) {
				codeDice = '\u2681'
			}
			else if (this.state.dice1 === 3) {
				codeDice = '\u2682'
			}
			else if (this.state.dice1 === 4) {
				codeDice = '\u2683'
			}
			else if (this.state.dice1 === 5) {
				codeDice = '\u2685'
			}
			else if (this.state.dice1 === 6) {
				codeDice = '\u2685'
            }
		}
		else {
			if (this.state.dice2 === 2) {
				codeDice = '\u2681'
			}
			else if (this.state.dice2 === 3) {
				codeDice = '\u2682'
			}
			else if (this.state.dice2 === 4) {
				codeDice = '\u2683'
			}
			else if (this.state.dice2 === 5) {
				codeDice = '\u2685'
			}
			else if (this.state.dice2 === 6) {
				codeDice = '\u2685'
			}
		}

		return codeDice
	}

	render() {
		let codeDice1 = this.calculateCodeDice(1)
		let codeDice2 = this.calculateCodeDice(2)

		return (
			<div id="containerDices">
				<input type="button" value="Tirar dados" onClick={this.rollDices}/>
				<br/>
				<span style={{fontSize: 90}}>{codeDice1}{codeDice2}</span>
			</div>
		);
	}
}

export default Dices