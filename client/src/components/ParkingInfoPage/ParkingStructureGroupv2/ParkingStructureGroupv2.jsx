import React, { Component } from "react";
import PSCard from "./PSCard/PSCard";
import axios from "axios";

import "./ParkingStructureGroup.css";

class ParkingStructureGroup extends Component {
	state = {
		permit: {
			green: {
				id: "mongodbpermitid0",
				textStyle: "light-text",
				expand: false,
				dataArr: [],
			},
			gold: {
				id: "mongodbpermitid1",
				textStyle: "light-text",
				expand: false,
				dataArr: [],
			},
			orange: {
				id: "mongodbpermitid2",
				textStyle: "light-text",
				expand: false,
				dataArr: [],
			},
			purple: {
				id: "mongodbpermitid3",
				textStyle: "light-text",
				expand: false,
				dataArr: [],
			},
			payBySpace: {
				id: "mongodbpermitid4",
				textStyle: "dark-text",
				expand: false,
				dataArr: [],
			},
		},
	};

	componentDidMount() {
		this.handleHTTPGetPermitColor(this.props.color);
	}

	componentDidUpdate() {
		if (this.props.timeUpdated.ps1.elapsedTime === 61) {
			this.handleHTTPGetPermitColor(this.props.color);
		}
	}

	updatePermitsFromHTTPResponse = (res) => {
		let permit = { ...this.state.permit };

		// reset dataArr for all colors
		Object.entries(permit).map((element) => {
			element[1].dataArr = [];
		});

		res.data.map((permit_entry) => {
			const { id, level, spots, structure } = permit_entry;
			const color = this.standardizeColorLongToShort(permit_entry.color);

			permit[color].dataArr.push({
				id: id,
				spots: spots,
				structure: structure,
				floor: level,
			});
		});
		this.props.onResetElapsedTime();
		this.setState({ permit: permit });
	};

	// returns standardized color. 'Green Permit' -> 'green'
	standardizeColorLongToShort = (color) => {
		switch (color) {
			case "Green Permit":
				return "green";
			case "Gold Permit":
				return "gold";
			case "Orange Permit":
				return "orange";
			case "Purple Permit":
				return "purple";
			case "Pay-By-Space":
				return "payBySpace";
			default:
				return "green";
		}
	};

	standardizeColorShortToLong = (color) => {
		switch (color) {
			case "green":
				return "Green%20Permit";
			case "gold":
				return "Gold%20Permit";
			case "orange":
				return "Orange%20Permit";
			case "purple":
				return "Purple%20Permit";
			case "pay-by-space":
				return "Pay-By-Space";
			default:
				return "Green%20Permit";
		}
	};

	handleHTTPGetPermitColor = (color) => {
		console.log("HTTP CALL: GET /parkingStructures/color/:color");
		// standardize to form 'Green Permit'
		let standardizedColor = this.standardizeColorShortToLong(color);
		axios
			.get(`http://localhost:5000/parkingStructures/color/` + standardizedColor)
			.then((res) => {
				this.updatePermitsFromHTTPResponse(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleExpandCard = (color) => {
		const editedState = { ...this.state.permit };
		editedState[color].expand = !editedState[color].expand;
		this.setState({ permit: editedState });
	};

	render() {
		const { permit } = this.state;
		return (
			<React.Fragment>
				<div className="card-container">
					{Object.keys(permit).map((color, index) => {
						return (
							<PSCard
								key={index}
								cardId={permit[color].id}
								dataArr={permit[color].dataArr}
								textStyle={permit[color].textStyle}
								color={color}
								expand={permit[color].expand}
								onExpandCard={this.handleExpandCard}
							/>
						);
					})}
				</div>
			</React.Fragment>
		);
	}
}

export default ParkingStructureGroup;