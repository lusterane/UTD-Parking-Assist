import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import ParkingInfoPage from './components/ParkingInfoPage/ParkingInfoPage';

import './App.css';

function App() {
	const [color, setColor] = useState('');

	const handleChangeColor = (newColor) => {
		setColor(newColor);
	};

	const handleChangeColorDefault = () => {
		setColor('');
	};

	return (
		<div className={'root-container'}>
			<BrowserRouter>
				<Switch>
					<Route exact path={process.env.PUBLIC_URL + '/'}>
						<HomePage
							changeColor={handleChangeColor}
							changeColorDefault={handleChangeColorDefault}
							color={color}
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

export default App;
