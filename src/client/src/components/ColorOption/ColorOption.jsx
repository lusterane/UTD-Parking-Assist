import React, { Component } from "react";
import "./ColorOptionStyle.css";
import "./Colors.css";

class ColorOption extends Component {
	state = {};

	render() {
		const classStr = this.props.color + "-option" + " square";
		return (
			<React.Fragment>
				<div
					onMouseOver={() => {
						this.props.handleMouseOver(this.props.color);
					}}
					onMouseLeave={() => {
						this.props.handleMouseLeave(this.props.color);
					}}
					className={classStr}
				></div>
			</React.Fragment>
		);
	}
}

export default ColorOption;
