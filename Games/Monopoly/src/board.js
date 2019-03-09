import React from 'react'
import './board.css'
import Square from './square.js'
import imgMonopoly from './images/monopoly.jpg'


class Board extends React.Component {

	state = {
		squares: this.loadSquares()			
	}
	
	render() {
		return (
			<div className="board">
			{
				this.drawBoard()
			}			
			</div>
		)
	}
	
	updateCard = (squareNumber) => {			
		const square = this.state.squares.find(s => s.order === squareNumber)
		this.props.updateCard(square.color, square.name, square.price)
	}
	
	drawBoard() {
		return (					
			<table id="tableBoard">
				<tbody>
					<tr>
						<td colSpan="11">
							<table>
								<tbody>
									<tr>			
										<Square name="Parking" order={20} position="up" color="white" size="big" updateCard={this.updateCard} />
										<Square order={21} position="up" color="red" size="small" updateCard={this.updateCard} />
										<Square order={22} position="up" color="red" size="small" updateCard={this.updateCard} />
										<Square order={23} position="up" color="white" size="small" updateCard={this.updateCard} />
										<Square order={24} position="up" color="red" size="small" updateCard={this.updateCard} />
										<Square order={25} position="up" color="white" size="small" updateCard={this.updateCard} />
										<Square order={26} position="up" color="yellow" size="small" updateCard={this.updateCard} />
										<Square order={27} position="up" color="yellow" size="small" updateCard={this.updateCard} />
										<Square order={28} position="up" color="white" size="small" updateCard={this.updateCard} />
										<Square order={29} position="up" color="yellow" size="small" updateCard={this.updateCard} />
										<Square name="Ir a la cárcel" order={30} position="up" color="white" size="big" updateCard={this.updateCard} />
									</tr>
								</tbody>
							</table>			
						</td>									
					</tr>
					<tr>
						<td>
							<table>
								<tbody>
									<tr>
										<Square order={19} position="left" color="orange" size="small" updateCard={this.updateCard} />										
									</tr>
									<tr>
										<Square order={18} position="left" color="white" size="small" updateCard={this.updateCard} />													
									</tr>
									<tr>
										<Square order={17} position="left" color="orange" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={16} position="left" color="orange" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={15} position="left" color="white" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={14} position="left" color="brown" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={13} position="left" color="brown" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={12} position="left" color="white" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={11} position="left" color="brown" size="small" updateCard={this.updateCard} />
									</tr>																																																																																									
								</tbody>
							</table>						
						</td>
						<td colSpan="9" className="boardCenter">
							<img src={imgMonopoly} alt="" id="boardCentralImage"/>
						</td>
						<td>
							<table>
								<tbody>
									<tr>
										<Square order={31} position="right" color="green" size="small" updateCard={this.updateCard} />										
									</tr>
									<tr>
										<Square order={32} position="right" color="white" size="small" updateCard={this.updateCard} />													
									</tr>
									<tr>
										<Square order={33} position="right" color="green" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={34} position="right" color="green" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={35} position="right" color="white" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={36} position="right" color="blue" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={37} position="right" color="blue" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={38} position="right" color="white" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={39} position="right" color="blue" size="small" updateCard={this.updateCard} />
									</tr>									
								</tbody>
							</table>						
						</td>
					</tr>		
					<tr>
						<td colSpan="11">
							<table>
								<tbody>
									<tr>			
										<Square name="Cárcel" order={10} position="down" color="white" size="big" updateCard={this.updateCard} />						
										<Square order={9} position="down" color="violet" size="small" updateCard={this.updateCard} />
										<Square order={8} position="down" color="violet" size="small" updateCard={this.updateCard} />
										<Square order={7} position="down" color="white" size="small" updateCard={this.updateCard} />
										<Square order={6} position="down" color="violet" size="small" updateCard={this.updateCard} />
										<Square order={5} position="down" color="white" size="small" updateCard={this.updateCard} />
										<Square order={4} position="down" color="gray" size="small" updateCard={this.updateCard} />
										<Square order={3} position="down" color="white" size="small" updateCard={this.updateCard} />
										<Square order={2} position="down" color="gray" size="small" updateCard={this.updateCard} />
										<Square order={1} position="down" color="gray" size="small" updateCard={this.updateCard} />
										<Square name="Salida" order={0} position="down" color="white" size="big" updateCard={this.updateCard} />
									</tr>
								</tbody>
							</table>			
						</td>						
					</tr>
				</tbody>																														
			</table>
		);	
	}

	loadSquares() {
		return [
			{
				name: 'Salida',
				position: 'bottom',
				size: 'big',
				order: 0,
				color: 'white',
				price: 0
			},
			{
				name: 'Calle de Poniente',
				position: 'bottom',
				size: 'small',
				order: 1,
				color: 'gray',
				price: 6000
			},			
			{
				name: 'Calle de Ferrer Bassa',
				position: 'bottom',
				size: 'small',
				order: 2,
				color: 'gray',
				price: 8000
			},
			{
				name: 'Suerte',
				position: 'bottom',
				size: 'small',
				order: 3,
				color: 'white',
				price: 0
			},
			{
				name: 'Calle del Gregal',
				position: 'bottom',
				size: 'small',
				order: 4,
				color: 'gray',
				price: 10000
			},
			{
				name: 'Central de Autobuses',
				position: 'bottom',
				size: 'small',
				order: 5,
				color: 'white',
				price: 50000
			},
			{
				name: 'Calle Tánger',
				position: 'bottom',
				size: 'small',
				order: 6,
				color: 'violet',
				price: 14000
			},
			{
				name: 'Impuestos',
				position: 'bottom',
				size: 'small',
				order: 7,
				color: 'white',
				price: 0
			},
			{
				name: 'Calle Badajoz',
				position: 'bottom',
				size: 'small',
				order: 8,
				color: 'violet',
				price: 16000
			},
			{
				name: 'Calle Bolivia',
				position: 'bottom',
				size: 'small',
				order: 9,
				color: 'violet',
				price: 20000
			},
			{
				name: 'Cárcel',
				position: 'bottom',
				size: 'big',
				order: 10,
				color: 'white',
				price: 0
			},
			{
				name: 'Calle Sicilia',
				position: 'left',
				size: 'small',
				order: 11,
				color: 'brown',
				price: 26000
			},
			{
				name: 'Suerte',
				position: 'left',
				size: 'small',
				order: 12,
				color: 'white',
				price: 0
			},
			{
				name: 'Calle Nápoles',
				position: 'left',
				size: 'small',
				order: 13,
				color: 'brown',
				price: 30000
			},
			{
				name: 'Calle Casp',
				position: 'left',
				size: 'small',
				order: 14,
				color: 'brown',
				price: 34000
			},
			{
				name: 'Metro de Barcelona',
				position: 'left',
				size: 'small',
				order: 15,
				color: 'white',
				price: 50000
			},
			{
				name: 'Travesera de les Corts',
				position: 'left',
				size: 'small',
				order: 16,
				color: 'orange',
				price: 40000
			},
			{
				name: 'Avenida Josep Tarradelles',
				position: 'left',
				size: 'small',
				order: 17,
				color: 'orange',
				price: 44000
			},
			{
				name: 'Impuestos',
				position: 'left',
				size: 'small',
				order: 18,
				color: 'white',
				price: 0
			},
			{
				name: 'Calle Berlín',
				position: 'left',
				size: 'small',
				order: 19,
				color: 'orange',
				price: 48000
			},
			{			
				name: 'Parking',
				position: 'up',
				size: 'big',
				order: 20,
				color: 'white',
				price: 0
			},
			{			
				name: 'Calle Numancia',
				position: 'up',
				size: 'small',
				order: 21,
				color: 'red',
				price: 56000
			},
			{			
				name: 'Calle Córcega',
				position: 'up',
				size: 'small',
				order: 22,
				color: 'red',
				price: 60000
			},
			{			
				name: 'Suerte',
				position: 'up',
				size: 'small',
				order: 23,
				color: 'white',
				price: 0
			},
			{			
				name: 'Calle Aribau',
				position: 'up',
				size: 'small',
				order: 24,
				color: 'red',
				price: 64000
			},
			{			
				name: 'Puerto de Barcelona',
				position: 'up',
				size: 'small',
				order: 25,
				color: 'white',
				price: 50000
			},
			{			
				name: 'Calle Consejo de Ciento',
				position: 'up',
				size: 'small',
				order: 26,
				color: 'yellow',
				price: 74000
			},
			{			
				name: 'Calle Diputación',
				position: 'up',
				size: 'small',
				order: 27,
				color: 'yellow',
				price: 78000
			},
			{			
				name: 'Impuestos',
				position: 'up',
				size: 'small',
				order: 28,
				color: 'white',
				price: 0
			},
			{			
				name: 'Calle Aragón',
				position: 'up',
				size: 'small',
				order: 29,
				color: 'yellow',
				price: 84000
			},
			{			
				name: 'Ir a la cárcel',
				position: 'up',
				size: 'big',
				order: 30,
				color: 'white',
				price: 0
			},
			{			
				name: 'Avenida de Pedralbes',
				position: 'right',
				size: 'small',
				order: 31,
				color: 'green',
				price: 96000
			},
			{			
				name: 'Suerte',
				position: 'right',
				size: 'small',
				order: 32,
				color: 'white',
				price: 0
			},
			{			
				name: 'Paseo de la Bonanova',
				position: 'right',
				size: 'small',
				order: 33,
				color: 'green',
				price: 104000
			},
			{			
				name: 'Vía Augusta',
				position: 'right',
				size: 'small',
				order: 34,
				color: 'green',
				price: 112000
			},
			{			
				name: 'Aeropuerto',
				position: 'right',
				size: 'small',
				order: 35,
				color: 'white',
				price: 50000
			},
			{			
				name: 'Las Ramblas',
				position: 'right',
				size: 'small',
				order: 36,
				color: 'blue',
				price: 0
			},
			{			
				name: 'Gran Vía',
				position: 'right',
				size: 'small',
				order: 37,
				color: 'blue',
				price: 124000
			},
			{			
				name: 'Impuestos',
				position: 'right',
				size: 'small',
				order: 38,
				color: 'white',
				price: 0
			},
			{			
				name: 'Paseo de Gracia',
				position: 'right',
				size: 'small',
				order: 39,
				color: 'blue',
				price: 130000
			}
		]
	}
}

export default Board