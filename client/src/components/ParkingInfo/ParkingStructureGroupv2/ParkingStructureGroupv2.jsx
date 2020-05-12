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
				dataArr: [
					{
						id: "mongodbid2",
						spots: 100,
						structure: "ps1",
						floor: 5,
					},
					{
						id: "mongodbid3",
						spots: 120,
						structure: "ps3",
						floor: 4,
					},
				],
			},
			orange: {
				id: "mongodbpermitid2",
				textStyle: "light-text",
				expand: false,
				dataArr: [
					{
						id: "mongodbid4",
						spots: 120,
						structure: "ps3",
						floor: 3,
					},
				],
			},
			purple: {
				id: "mongodbpermitid3",
				textStyle: "light-text",
				expand: false,
				dataArr: [
					{
						id: "mongodbid6",
						spots: 100,
						structure: "ps1",
						floor: 5,
					},
					{
						id: "mongodbid7",
						spots: 120,
						structure: "ps3",
						floor: 4,
					},
				],
			},
			payBySpace: {
				id: "mongodbpermitid4",
				textStyle: "dark-text",
				expand: false,
				dataArr: [
					{
						id: "mongodbid8",
						spots: 100,
						structure: "ps1",
						floor: 5,
					},
					{
						id: "mongodbid9",
						spots: 120,
						structure: "ps3",
						floor: 4,
					},
				],
			},
		},
	};

	componentDidMount() {
		this.handleGetPermitColor(this.props.color);
	}

	initializeState = (res) => {
		let permit = { ...this.state.permit };
		res.data.map((permit_entry) => {
			const { id, color, level, spots, structure } = permit_entry;
			const standardizedColor = this.standardizeColorLongToShort(color);
			console.log(permit);
			permit[standardizedColor].dataArr.push({
				id: id,
				spots: spots,
				structure: structure,
				floor: level,
			});
		});
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
		}
	};

	handleGetPermitColor = (color) => {
		// standardize to form 'Green Permit'
		let standardizedColor = "";
		switch (color) {
			case "green":
				standardizedColor = "Green%20Permit";
				break;
			case "gold":
				standardizedColor = "Gold%20Permit";
				break;
			case "orange":
				standardizedColor = "Orange%20Permit";
				break;
			case "purple":
				standardizedColor = "Purple%20Permit";
				break;
			case "pay-by-space":
				standardizedColor = "Pay-By-Space";
				break;
		}

		axios
			.get(`http://localhost:5000/parkingStructures/color/` + standardizedColor)
			.then((res) => {
				this.initializeState(res);
				console.log(res);
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
