import React from 'react'

class Square extends React.Component {

	constructor(props) {
		super(props)
        
        this.orientation = 
            this.props.position === 'up' || this.props.position === 'down'
                ? 'vertical'
                : 'horizontal'	
		
		this.state = {		
			position: this.props.position,	
			orientation: this.orientation,
			positionContentClass: this.props.position + "Content",
			positionHeaderClass: this.props.position + "Header",
			size: this.props.size,			
			colorStreetClass: this.props.color + "Street",
			key: "square-" + this.props.order,
			order: this.props.order,
			name: this.props.name
		}
	}
	
	updateCard = (squareNumber) => {
		this.props.updateCard(squareNumber)
	}
	
	render() {
        const {position, orientation, positionContentClass, positionHeaderClass, size, 
            colorStreetClass, key, order, name} 
            = this.state
            
		let square = null
		
		if (size === 'big') {
			square =					
				<span className="textSquare">{name}</span>												
		}
		else {
            square =
                position === 'up'
                    ?   <div className="divSquare">
                            <div className={positionContentClass}></div>			
                            <div className={[positionHeaderClass, colorStreetClass].join(' ')}></div>					
                        </div>

                    :   <div className="divSquare">			
                            <div className={[positionHeaderClass, colorStreetClass].join(' ')}></div>
                            <div className={positionContentClass}></div>
                        </div>	
		}			
        
        const classSquareName =
            size === 'big'
                ? 'bigSquare'
                : size + "-" + orientation
		
		return (
			<td key={key} id={key} className={classSquareName}
				onMouseEnter={() => this.updateCard(order)}>				
				{square}
			</td>
		);
	}
}

export default Square
