import React, { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import ColorOption from "../ColorOption/ColorOption";
import ConfirmModal from "./ConfirmModal/ConfirmModal";

import "./HomePageStyle.css";
import "../ColorOption/Colors.css";
import "../../styles/shared/LoadingSpinner.css";

class Home extends Component {
	state = {
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
	};

	handleMouseLeave = () => {
		if (!this.state.showModal) {
			this.props.changeColorDefault();
		}
	};

	render() {
		return (
			<React.Fragment>
				{this.props.isLoaded ? (
					<div>
						{this.props.onlineStatus ? (
							""
						) : (
							<Alert style={{ textAlign: "center" }} variant="warning">
								<i className="fas fa-exclamation-circle"></i>
								To reduce server loads, online hours are from 8:00AM - 8:00PM CST
							</Alert>
						)}
						<div className="container">
							<div className="row center-vertical">
								<div className="col center-horizontal">
									<h1 className={this.props.color}>Permit Color?</h1>
									<div className="row">
										<ColorOption
											color="green"
											onClick={() => {
												this.handleModalShow(this.props.color);
											}}
											handleMouseOver={this.props.changeColor}
											handleMouseLeave={this.handleMouseLeave}
										/>
										<ColorOption
											color="gold"
											onClick={() => {
												this.handleModalShow(this.props.color);
											}}
											handleMouseOver={this.props.changeColor}
											handleMouseLeave={this.handleMouseLeave}
										/>
										<ColorOption
											color="orange"
											onClick={() => {
												this.handleModalShow(this.props.color);
											}}
											handleMouseOver={this.props.changeColor}
											handleMouseLeave={this.handleMouseLeave}
										/>
										<ColorOption
											color="purple"
											onClick={() => {
												this.handleModalShow(this.props.color);
											}}
											handleMouseOver={this.props.changeColor}
											handleMouseLeave={this.handleMouseLeave}
										/>
										<ColorOption
											color="pay-by-space"
											onClick={() => {
												this.handleModalShow(this.props.color);
											}}
											handleMouseOver={this.props.changeColor}
											handleMouseLeave={this.handleMouseLeave}
										/>
									</div>
								</div>
							</div>
							<ConfirmModal
								color={this.props.color}
								showModal={this.state.showModal}
								onModalShow={this.handleModalShow}
								onModalClose={this.handleModalClose}
								onModalConfirm={this.handleModalConfirm}
							/>
						</div>
					</div>
				) : (
					<div className="spinner-container">
						<Spinner animation="border" role="status">
							<span className="sr-only">Loading...</span>
						</Spinner>
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default Home;