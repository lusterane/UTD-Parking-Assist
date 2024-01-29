import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App.js';
import ParticlesComponent from './ParticlesComponent.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

ReactGA.initialize('G-S5M5CEPJMM', { debug: true });

root.render(
	<React.Fragment>
		<App />
		<ParticlesComponent />
	</React.Fragment>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
