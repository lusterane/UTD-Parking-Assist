import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import './ColorBlindToggle.css';

function ColorBlindToggle({ onToggleColorBlindMode }) {
	const [colorBlindMode, setColorBlindMode] = useState(
		localStorage.getItem('color-blind-status') === 'true'
	);
	const [colorBlindTooltipOpen, setColorBlindTooltipOpen] = useState(false);

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
			<Tooltip
				placement="bottom"
				isOpen={colorBlindTooltipOpen}
				target="color-blind"
				toggle={() => setColorBlindTooltipOpen(!colorBlindTooltipOpen)}
			>
				{colorBlindMode ? 'Turn OFF' : 'Turn ON'} <br /> {'Colorblind'}
			</Tooltip>
		</div>
	);
}

export default ColorBlindToggle;
