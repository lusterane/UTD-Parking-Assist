import React from 'react';
import './PSCardHeader.css';

function PSCardHeader({ color, index }) {
	const getHeader = (color, index) => {
		if (color === 'payBySpace') {
			return (
				<span>
					<i className="fas fa-info-circle"></i>
					<span> This option is Pay By Space</span>
				</span>
			);
		}
		// show best choice text
		if (index === 0) {
			return (
				<span className="gold">
					<i className="fas fa-star"></i>
					<span> BEST CHOICE</span>
				</span>
			);
		}
		return '';
	};

	return <div className="ps-card-header-container">{getHeader(color, index)}</div>;
}

export default PSCardHeader;
