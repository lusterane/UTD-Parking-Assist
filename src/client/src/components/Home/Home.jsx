import React, { Component } from "react";
import {} from "react-bootstrap";

import ColorOption from "../ColorOption/ColorOption";
import ConfirmModal from "./ConfirmModal/ConfirmModal";

import "./HomeStyle.css";
import "../ColorOption/Colors.css";

class Home extends Component {
	state = {
		color: "black",
		showModal: false,
	};

	handleModalClose = () => {
		this.setState({ showModal: false });
	};
	handleModalShow = (color) => {
		this.setState({ showModal: true });
	};

	handleModalConfirm = () => {
		this.setState({ showModal: false });
		console.log("confirm");
	};

	handleMouseOver = (color) => {
		this.setState({ color: color });
	};

	handleMouseLeave = (color) => {
		if (!this.state.showModal) {
			this.setState({ color: "black" });
		}
	};

	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row center-vertical">
						<div className="col center-horizontal">
							<h1 className={this.state.color}>Permit Color?</h1>
							<div className="row">
								<ColorOption
									color="green"
									onClick={() => {
										this.handleModalShow(this.state.color);
									}}
									handleMouseOver={this.handleMouseOver}
									handleMouseLeave={this.handleMouseLeave}
								/>
								<ColorOption
									color="gold"
									onClick={() => {
										this.handleModalShow(this.state.color);
									}}
									handleMouseOver={this.handleMouseOver}
									handleMouseLeave={this.handleMouseLeave}
								/>
								<ColorOption
									color="orange"
									onClick={() => {
										this.handleModalShow(this.state.color);
									}}
									handleMouseOver={this.handleMouseOver}
									handleMouseLeave={this.handleMouseLeave}
								/>
								<ColorOption
									color="purple"
									onClick={() => {
										this.handleModalShow(this.state.color);
									}}
									handleMouseOver={this.handleMouseOver}
									handleMouseLeave={this.handleMouseLeave}
								/>
								<ColorOption
									color="pay-by-space"
									onClick={() => {
										this.handleModalShow(this.state.color);
									}}
									handleMouseOver={this.handleMouseOver}
									handleMouseLeave={this.handleMouseLeave}
								/>
							</div>
						</div>
					</div>
				</div>

				<ConfirmModal
					color={this.state.color}
					showModal={this.state.showModal}
					onModalShow={this.handleModalShow}
					onModalClose={this.handleModalClose}
					onModalConfirm={this.handleModalConfirm}
				/>
			</React.Fragment>
		);
	}
}

export default Home;
