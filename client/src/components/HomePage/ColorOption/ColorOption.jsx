import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './ColorOptionStyle.css';
import '../../../styles/shared/Colors.css';

class ColorOption extends Component {
	state = {};

	render() {
		const { color, onClick, handleMouseOver, handleMouseLeave } = this.props;

		return (
			<React.Fragment>
				{color === 'grey' ? (
					<div className={color + '-background color-option'}>
						<i className='fas fa-car-side' style={{ color: '#fff' }}></i>
					</div>
				) : this.props.colorBlindMode ? (
					<Button
						outline
						color='secondary'
						onClick={() => {
							onClick(color);
						}}
						onMouseOver={() => {
							handleMouseOver(color);
						}}
						onMouseLeave={() => {
							handleMouseLeave();
						}}
						className={
							color +
							'-color-blind-background color-blind-option pointer border-' +
							color
						}
					>
						{color.charAt(0).toUpperCase() + color.slice(1)} Permit
					</Button>
				) : (
					<Button
						outline
						type='button'
						color='secondary'
						onClick={() => {
							onClick(color);
						}}
						onMouseOver={() => {
							handleMouseOver(color);
						}}
						onMouseLeave={() => {
							handleMouseLeave();
						}}
						className={color + '-background color-option'}
						// className={
						// 	this.props.colorBlindMode
						// 		? ''
						// 		: color + '-background color-option pointer'
						// }
					>
						<i className='fas fa-car-side'></i>
					</Button>
				)}
			</React.Fragment>
		);
	}
}

export default ColorOption;
