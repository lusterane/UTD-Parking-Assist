import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import ParkingInfo from "./components/ParkingInfo/ParkingInfo";

import "./App.css";

const defaultColor = "black";
class App extends Component {
	state = {
		color: defaultColor,
	};

	handleChangeColor = (color) => {
		this.setState({ color: color });
	};

	handleChangeColorDefault = () => {
		this.setState({ color: defaultColor });
	};

	render() {
		return (
			<Router>
				<div>
					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						<Route exact path="/">
							<Home
								changeColor={this.handleChangeColor}
								changeColorDefault={this.handleChangeColorDefault}
								color={this.state.color}
							/>
						</Route>
						<Router path="/parkingInfo">
							<ParkingInfo color={this.state.color} />
						</Router>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
