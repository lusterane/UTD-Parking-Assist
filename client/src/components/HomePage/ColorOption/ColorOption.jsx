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
						className={color + '-background square pointer'}
					></div>
				)}
			</React.Fragment>
		);
	}
}

export default ColorOption;
