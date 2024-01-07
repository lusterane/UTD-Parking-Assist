import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import ParkingInfoPage from './components/ParkingInfoPage/ParkingInfoPage';
import UIOptions from './components/UIOptions/UIOptions';

import './App.css';

function App() {
	const [color, setColor] = useState('');
	const [colorBlindMode, setColorBlindMode] = useState(false);

	const handleChangeColor = (newColor) => {
		setColor(newColor);
	};

	const handleChangeColorDefault = () => {
		setColor('');
	};

	const toggleColorBlindMode = () => {
		setColorBlindMode(!colorBlindMode);
	};

	return (
		<div className={'root-container'}>
			<UIOptions onToggleColorBlindMode={toggleColorBlindMode} />
			<BrowserRouter>
				<Switch>
					<Route exact path={process.env.PUBLIC_URL + '/'}>
						<HomePage
							changeColor={handleChangeColor}
							changeColorDefault={handleChangeColorDefault}
							color={color}
							colorBlindMode={colorBlindMode}
						/>
					</Route>
					<Route path={process.env.PUBLIC_URL + '/parkingInfoPage'}>
						<ParkingInfoPage colorBlindMode={colorBlindMode} />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
