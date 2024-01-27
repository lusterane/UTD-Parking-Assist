import React, { useState } from 'react';
import './ColorBlindToggle.css';

function ColorBlindToggle({ onToggleColorBlindMode }) {
	const [colorBlindMode, setColorBlindMode] = useState(
		localStorage.getItem('color-blind-status') === 'true'
	);

	const handleToggleColorBlindMode = () => {
		const newColorBlindMode = !colorBlindMode;
		setColorBlindMode(newColorBlindMode);
		localStorage.setItem('color-blind-status', newColorBlindMode);

		onToggleColorBlindMode();
	};

	return (
		<div className="icons-container dark-icon-border round-corners">
			<div onClick={handleToggleColorBlindMode} id="color-blind" className="icon pointer">
				{colorBlindMode ? (
					<i className="fas fa-low-vision fa-lg"></i>
				) : (
					<i className="fas fa-eye fa-lg"></i>
				)}
			</div>
		</div>
	);
}

export default ColorBlindToggle;
