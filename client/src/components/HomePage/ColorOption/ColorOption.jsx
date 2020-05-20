import React, { Component } from 'react';
// import { Tooltip } from "react-bootstrap";

import './ColorOptionStyle.css';
import '../../../styles/shared/Colors.css';

class ColorOption extends Component {
	state = {};

	render() {
		const { color, onClick, handleMouseOver, handleMouseLeave } = this.props;

		return (
			<React.Fragment>
				{color === 'grey' ? (
					<div className={color + '-background square'}></div>
				) : (
					<div
						id={'Tooltip-' + color}
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
							this.props.colorBlindMode ? '' : color + '-background square pointer'
						}
					>
						{this.props.colorBlindMode ? (
							<div className={'pointer border-' + color}>
								{color.charAt(0).toUpperCase() + color.slice(1)} Permit
							</div>
						) : (
							''
						)}
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default ColorOption;
