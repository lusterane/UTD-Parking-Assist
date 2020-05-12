import React, { Component } from "react";
import PSCard from "./PSCard/PSCard";

import "./ParkingStructureGroup.css";

class ParkingStructureGroup extends Component {
	state = {
		permit: {
			green: {
				id: "mongodbpermitid0",
				textStyle: "light-text",
				expand: false,
				dataArr: [
					{
						id: "mongodbid1",
						spots: 100,
						structure: "ps1",
						floor: 5,
					},
					{
						id: "mongodbid0",
						spots: 120,
						structure: "ps3",
						floor: 4,
					},
				],
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
