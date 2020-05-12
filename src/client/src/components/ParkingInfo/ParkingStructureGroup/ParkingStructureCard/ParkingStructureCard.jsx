import React, { Component } from "react";
import { ListGroup, Card } from "react-bootstrap";
import PermitType from "./PermitType/PermitType";

import "./ParkingStructureCard.css";

class ParkingStructureCard extends Component {
	state = {};
	render() {
		return (
			<Card className="card">
				<Card.Header>{this.props.parkingStructure}</Card.Header>
				<ListGroup>
					<PermitType color="green" textStyle="light-text" />
					<PermitType color="gold" textStyle="dark-text" />
					<PermitType color="orange" textStyle="light-text" />
					<PermitType color="purple" textStyle="light-text" />
					<PermitType color="pay-by-space" textStyle="dark-text" />
				</ListGroup>
			</Card>
		);
	}
}

export default ParkingStructureCard;
