import React, { Component } from "react";
//import ParkingStructureGroup from "./ParkingStructureGroup/ParkingStructureGroup";
import ParkingStructureGroup from "./ParkingStructureGroupv2/ParkingStructureGroupv2";

class ParkingInfo extends Component {
	state = {
		color: this.props.color,
	};
	render() {
		return (
			<React.Fragment>
				<h1>it's {this.state.color}</h1>
				<ParkingStructureGroup />
			</React.Fragment>
		);
	}
}

export default ParkingInfo;
