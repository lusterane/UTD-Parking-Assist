import React from 'react';
import './PSCardHeader.css';
class PSCardHeader extends React.Component {
	getHeader = (color, index) => {
		if (color === 'payBySpace') {
			return (
				<span className="">
					<i class="fas fa-info-circle"></i>
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
	render() {
		const { color, index } = this.props;

		return <div className="ps-card-header-container">{this.getHeader(color, index)}</div>;
	}
}

export default PSCardHeader;
