import React, { Component } from "react";
import "./ColorOptionStyle.css";
import "./Colors.css";

class ColorOption extends Component {
	state = {};

	render() {
		const { color, onClick, handleMouseOver, handleMouseLeave } = this.props;
		const classStr = color + "-option square";

		return (
			<React.Fragment>
				<div
					onClick={() => {
						onClick(color);
					}}
					onMouseOver={() => {
						handleMouseOver(color);
					}}
					onMouseLeave={() => {
						handleMouseLeave(color);
					}}
					className={classStr}
				></div>
			</React.Fragment>
		);
	}
}

export default ColorOption;
