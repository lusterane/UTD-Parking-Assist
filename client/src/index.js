import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App.js';
import ParticlesComponent from './ParticlesComponent.js';
import UIOptions from './components/UIOptions/UIOptions.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.Fragment>
		<App />
		<ParticlesComponent />
		<UIOptions />
	</React.Fragment>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
