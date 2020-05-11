import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

import ColorOption from "../ColorOption/ColorOption";
import "./HomeStyle.css";
import "../ColorOption/Colors.css";

class Home extends Component {
	state = {
		color: "black",
	};

	handleMouseOver = (color) => {
		console.log("hovering " + color);
		this.setState({ color: color });
	};

	handleMouseLeave = (color) => {
		console.log("leaving " + color);
		this.setState({ color: "black" });
	};

	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row center-vertical">
						<div className="col center-horizontal">
							<h1 className={this.state.color}>Color Permit?</h1>
							<div className="row">
								<ColorOption
									color="green"
									handleMouseOver={this.handleMouseOver}
									handleMouseLeave={this.handleMouseLeave}
								/>
								<ColorOption
									color="gold"
									handleMouseOver={this.handleMouseOver}
									handleMouseLeave={this.handleMouseLeave}
								/>
								<ColorOption
									color="orange"
									handleMouseOver={this.handleMouseOver}
									handleMouseLeave={this.handleMouseLeave}
								/>
								<ColorOption
									color="purple"
									handleMouseOver={this.handleMouseOver}
									handleMouseLeave={this.handleMouseLeave}
								/>
								<ColorOption
									color="pay-by-space"
									handleMouseOver={this.handleMouseOver}
									handleMouseLeave={this.handleMouseLeave}
								/>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
