import React from 'react';
import './PSCardBody.css';

function PSCardBody({ spots, level, color, colorBlindMode }) {
	const renderColorBlindModeText = () => {
		if (colorBlindMode) {
			return (
				<p className={'sub-text border-' + color}>
					{color === 'payBySpace' ? 'PAY BY SPACE' : color.toUpperCase()}
				</p>
			);
		} else {
			return (
				<p className="sub-text">
					Color <i className={'fas fa-circle ' + color}></i>
				</p>
			);
		}
	};

	return (
		<div className="text">
			<p className="main-text">
				<span className={`${color}-text`}>{spots}</span> SPACES
			</p>
			<p className="sub-text">Level {level}</p>
			{renderColorBlindModeText()}
		</div>
	);
}

export default PSCardBody;
