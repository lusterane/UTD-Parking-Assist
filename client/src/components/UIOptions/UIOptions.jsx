import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import './UIOptions.css';

function UIOptions({ onToggleColorBlindMode }) {
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
		<div className="icons-container">
			<div
				onClick={handleToggleColorBlindMode}
				id="color-blind"
				className="icon pointer dark-icon-border rcorners"
			>
				{colorBlindMode ? (
					<i className="fas fa-eye fa-lg"></i>
				) : (
					<i className="fas fa-low-vision fa-lg"></i>
				)}
			</div>
			<Tooltip
				placement="bottom"
				isOpen={colorBlindTooltipOpen}
				target="color-blind"
				toggle={() => setColorBlindTooltipOpen(!colorBlindTooltipOpen)}
			>
				Color Blind Accessibility
			</Tooltip>
		</div>
	);
}

export default UIOptions;
