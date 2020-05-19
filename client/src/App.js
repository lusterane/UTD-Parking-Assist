import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import ParkingInfoPage from './components/ParkingInfoPage/ParkingInfoPage';

import './App.css';

const defaultColor = 'black';

class App extends Component {
	state = {
		color: defaultColor,
		updateOnlineStatusInterval: '',
		onlineHours: {
			fromHour: '0',
			toHour: '25',
		},

		onlineStatus: false,
		isLoaded: false,
	};
	componentDidMount() {
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
		this.setState({ isLoaded: true });
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

	getGreeting = () => {
		const nowHour = new Date().getHours();

		// Night: [20-23], [0 or 24 - 5]
		// Morning: [6-11]
		// Afternoon: [12-16]
		// Evening: [17-19] evening
		if (
			(nowHour >= 20 && nowHour <= 23) ||
			((nowHour === 0 || nowHour === 24) && nowHour <= 5)
		) {
			return this.getNightMessage();
		} else if (nowHour >= 6 && nowHour <= 11) {
			return this.getMorningMessage();
		} else if (nowHour >= 12 && nowHour <= 16) {
			return this.getAfternoonMessage();
		} else {
			return this.getEveningMessage();
		}
	};

	// returns random  message
	getNightMessage = () => {
		return 'Good Night';
	};
	getMorningMessage = () => {
		return 'Good Morning';
	};
	getAfternoonMessage = () => {
		return 'Good Afternoon';
	};
	getEveningMessage = () => {
		return 'Good Evening';
	};

	render() {
		return (
			<Router>
				<div>
					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						<Route exact path='/'>
							<HomePage
								onlineStatus={this.state.onlineStatus}
								changeColor={this.handleChangeColor}
								changeColorDefault={this.handleChangeColorDefault}
								color={this.state.color}
								isLoaded={this.state.isLoaded}
								getGreeting={this.getGreeting}
							/>
						</Route>
						<Router path='/parkingInfoPage'>
							<ParkingInfoPage
								onlineStatus={this.state.onlineStatus}
								isLoaded={this.state.isLoaded}
							/>
						</Router>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
