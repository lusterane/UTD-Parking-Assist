import React, { Component } from 'react';
// import { Tooltip } from "react-bootstrap";

import './ColorOptionStyle.css';
import '../../../styles/shared/Colors.css';

class ColorOption extends Component {
	state = {};

	render() {
		const { color, onClick, handleMouseOver, handleMouseLeave } = this.props;
		const classStr = color + '-background square';

		return (
			<React.Fragment>
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
					className={classStr}
				></div>
			</React.Fragment>
		);
	}
}

export default ColorOption;
