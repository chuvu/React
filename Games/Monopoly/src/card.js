import React from 'react'
import './card.css'
import imgSuerte from './images/suerte.jpg'
import imgImpuestos from './images/impuestos.jpg'
import imgInfraestructuras from './images/infraestructuras.jpg'
import imgSalida from './images/salida.jpg'
import imgCarcel from './images/carcel.jpg'
import imgParking from './images/parking.jpg'
import imgIrCarcel from './images/ir_carcel.jpg'

class Card extends React.Component {
	
	render() {
		let imageName
		
		if (this.props.streetName === 'Suerte') {
			imageName = imgSuerte		
		}
		else if (this.props.streetName === 'Impuestos') {
			imageName = imgImpuestos		
		}
		else if (this.props.streetName.startsWith('Metro') ||
					this.props.streetName.startsWith('Aeropuerto') ||
					this.props.streetName.startsWith('Central')	||
					this.props.streetName.startsWith('Puerto')) {
			imageName = imgInfraestructuras
		}
		else if (this.props.streetName === 'Salida') {
			imageName = imgSalida	
		}
		else if (this.props.streetName === 'Cárcel') {
			imageName = imgCarcel
		}
		else if (this.props.streetName === 'Parking') {
			imageName = imgParking	
		}
		else if (this.props.streetName === 'Ir a la cárcel') {
			imageName = imgIrCarcel		
		}
		
		return (
			<div id="card">
				<div><h4>Ficha</h4></div>
				<div className="cardColor" style={{backgroundColor: this.props.cardColor}}></div>
				<div className="cardName"><span>{this.props.streetName}</span></div>
				<br/>
				<br/>
				<div>
					<span>
					{
						this.props.price === 0
							? ''
							: 'Precio: ' + this.props.price
					}
					</span>
				</div>
				<br/>
				<div className="containerCardImage">
					<img src={imageName} alt={this.props.streetName} className="cardImage"/>				
				</div>
			</div>
		);
	}
}

export default Card