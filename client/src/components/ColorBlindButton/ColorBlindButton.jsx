import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';

import './ColorBlindButton.css';

class ColorBlindButton extends Component {
	state = {
		colorBlindTooltipOpen: false,
		colorBlindMode: false,
	};

	componentDidUpdate() {
		const data = localStorage.getItem('color-blind-status') === 'true';

		if (this.state.colorBlindMode !== data) {
			this.setState({ colorBlindMode: data });
		}
	}

	toggleColorBlindMode = () => {
		this.setState({ colorBlindMode: !this.state.colorBlindMode });
		localStorage.setItem('color-blind-status', !this.state.colorBlindMode);
	};

	/* TOOLTIPS */
	toggleColorBlindTooltip = () => {
		this.setState({ colorBlindTooltipOpen: !this.state.colorBlindTooltipOpen });
	};

	mouseHoverColorBlindIcon = () => {
		this.setState({ colorBlindTooltipOpen: true });
	};

	mouseLeaveColorBlindIcon = () => {
		this.setState({ colorBlindTooltipOpen: false });
	};
	render() {
		return (
			<React.Fragment>
				<div
					onClick={this.toggleColorBlindMode}
					id='color-blind'
					className='color-blind-container pointer'
				>
					{this.state.colorBlindMode ? (
						<i className='fas fa-low-vision fa-lg'></i>
					) : (
						<i className='fas fa-eye fa-lg'></i>
					)}
				</div>
				<Tooltip
					placement='left'
					isOpen={this.state.colorBlindTooltipOpen}
					target='color-blind'
					toggle={this.toggleColorBlindTooltip}
				>
					Color Blind Accessability
				</Tooltip>
			</React.Fragment>
		);
	}
}

export default ColorBlindButton;
