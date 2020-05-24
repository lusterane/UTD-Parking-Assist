import React, { Component } from "react";
import { Card } from "react-bootstrap";

import "../../../../styles/shared/Colors.css";
import "./PSCard.css";

class PSCard extends Component {
	state = {};

	// standardize color string
	standardizeColor = (color) => {
		if (color.charAt(3) === "-") {
			return "Pay by space";
		}
		return color.charAt(0).toUpperCase() + color.slice(1);
	};

	// standardize parking structure string
	standardizePs = (ps) => {
		switch (ps) {
			case "ps1":
				return "Parking Structure 1";
			case "ps3":
				return "Parking Structure 3";
			case "ps4":
				return "Parking Structure 4";
			default:
				return "Parking Structure -";
		}
	};

	render() {
		// process data
		let { textStyle, dataArr, color, onExpandCard, expand } = this.props;

		// standardize for STYLING
		const cardStyle =
			textStyle + " " + (color === "payBySpace" ? "pay-by-space" : color) + "-background";
		return (
			<Card className={cardStyle} style={{ width: "18rem" }}>
				<Card.Header>{this.standardizeColor(color)}</Card.Header>
				<Card.Body>
					{expand ? (
						dataArr.map((obj, index, arr) => {
							return (
								<div
									key={obj.id + index}
									className="card-text-container"
									onClick={() => {
										onExpandCard(color);
									}}
								>
									<Card.Title>{obj.spots} spots</Card.Title>
									<Card.Text>
										<span>{this.standardizePs(obj.structure)}</span>
										<br></br>
										<span>Floor {obj.floor}</span>
									</Card.Text>

									{index === arr.length - 1 ? "" : <hr></hr>}
								</div>
							);
						})
					) : (
						<div
							className="card-text-container"
							onClick={() => {
								onExpandCard(color);
							}}
						>
							<Card.Title>{dataArr[0].spots} spots</Card.Title>

							<Card.Text>
								<span>{this.standardizePs(dataArr[0].structure)}</span>
								<br></br>
								<span>Floor {dataArr[0].floor}</span>
								{dataArr.length > 1 ? <i className="fas fa-sort-down"></i> : ""}
							</Card.Text>
						</div>
					)}
				</Card.Body>
			</Card>
		);
	}
}

export default PSCard;
