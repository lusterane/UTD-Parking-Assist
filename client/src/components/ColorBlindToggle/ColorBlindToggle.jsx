import React, { useState } from 'react';
import ReactGA from 'react-ga4';

import './ColorBlindToggle.css';

function ColorBlindToggle({ onToggleColorBlindMode }) {
	const [colorBlindMode, setColorBlindMode] = useState(
		localStorage.getItem('color-blind-status') === 'true'
	);

	const handleToggleColorBlindMode = () => {
		ReactGA.event({
			category: 'button_press',
			action: 'toggle_color_blind',
			label: 'set color blind to ' + !colorBlindMode,
		});

		const newColorBlindMode = !colorBlindMode;
		setColorBlindMode(newColorBlindMode);
		localStorage.setItem('color-blind-status', newColorBlindMode);

		onToggleColorBlindMode();
	};

	return (
		<div
			className="icons-container dark-icon-border pointer round-corners"
			onClick={handleToggleColorBlindMode}
		>
			<div id="color-blind" className="eye-icon">
				{colorBlindMode ? (
					<i className="fas fa-low-vision"></i>
				) : (
					<i className="fas fa-eye"></i>
				)}
			</div>
		</div>
	);
}

export default ColorBlindToggle;
