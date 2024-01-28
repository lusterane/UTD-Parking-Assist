import React from 'react';
import './PSCardHeader.css';

function PSCardHeader({ dataEmpty, color, index }) {
	const getHeader = (dataEmpty, color, index) => {
		if (dataEmpty) {
			return '';
		}

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

	return <div className="ps-card-header-container">{getHeader(dataEmpty, color, index)}</div>;
}

export default PSCardHeader;
