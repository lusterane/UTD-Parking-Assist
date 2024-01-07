import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import ParkingInfoPage from './components/ParkingInfoPage/ParkingInfoPage';

import './App.css';

class App extends Component {
	state = {
		color: '',
	};

	// changes color for header
	handleChangeColor = (color) => {
		this.setState({ color: color });
	};

	handleChangeColorDefault = () => {
		this.setState({ color: '' });
	};

	render() {
		return (
			<div className={'root-container'}>
				<BrowserRouter>
					<Switch>
						<Route exact path={process.env.PUBLIC_URL + '/'}>
							<HomePage
								changeColor={this.handleChangeColor}
								changeColorDefault={this.handleChangeColorDefault}
								color={this.state.color}
								getGreeting={this.getGreeting}
							/>
						</Route>
						<Route path={process.env.PUBLIC_URL + '/parkingInfoPage'}>
							<ParkingInfoPage />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
