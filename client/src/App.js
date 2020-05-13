import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import ParkingInfoPage from "./components/ParkingInfoPage/ParkingInfoPage";

import "./App.css";

const defaultColor = "green";

class App extends Component {
	state = {
		color: defaultColor,

		updateOnlineStatusInterval: "",
		onlineHours: {
			fromHour: "8",
			toHour: "20",
		},

		onlineStatus: false,
	};
	constructor() {
		super();
	}
	componentWillMount() {
		this.setState({ updateOnlineStatusInterval: setInterval(this.updateOnlineStatus, 900) });
	}

	// permit color
	handleChangeColor = (color) => {
		this.setState({ color: color });
	};

	handleChangeColorDefault = () => {
		this.setState({ color: defaultColor });
	};

	// update time
	updateOnlineStatus = () => {
		if (this.checkOnlineStatus()) {
			this.setState({ onlineStatus: true });
		} else {
			this.setState({ onlineStatus: false });
		}
	};

	checkOnlineStatus = () => {
		const nowHour = new Date().getHours();
		const { fromHour, toHour } = this.state.onlineHours;
		if (nowHour >= fromHour && nowHour < toHour) {
			// online
			return true;
		} else {
			return false;
		}
	};

	render() {
		return (
			<Router>
				<div>
					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						<Route exact path="/">
							<HomePage
								changeColor={this.handleChangeColor}
								changeColorDefault={this.handleChangeColorDefault}
								color={this.state.color}
							/>
						</Route>
						<Router path="/parkingInfoPage">
							<ParkingInfoPage
								color={this.state.color}
								onlineStatus={this.state.onlineStatus}
							/>
						</Router>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
