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
		<div
			className="icons-container dark-icon-border pointer round-corners"
			onClick={handleToggleColorBlindMode}
		>
			<div id="color-blind" className="icon ">
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
