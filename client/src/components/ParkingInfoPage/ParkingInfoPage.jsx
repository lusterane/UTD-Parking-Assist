import React, { Component } from "react";
//import ParkingStructureGroup from "./ParkingStructureGroup/ParkingStructureGroup";
import ParkingStructureGroup from "./ParkingStructureGroupv2/ParkingStructureGroupv2";
import Time from "./Time/Time";
class ParkingInfo extends Component {
	state = {
		color: this.props.color,
	};
	render() {
		return (
			<React.Fragment>
				{/* <ParkingStructureGroup color={this.state.color} /> */}
				<h1> PARKING STRUCTURE STUFF PLACEHOLDER</h1>
				<Time onlineStatus={this.props.onlineStatus} />
			</React.Fragment>
		);
	}
}

export default ParkingInfo;
