import React from 'react';
import './PSCardHeader.css';

function PSCardHeader({ color, garage }) {
	return (
		<div className="parking-garage-header">
			<span className={color}>{garage}</span>
		</div>
	);
}

export default PSCardHeader;
