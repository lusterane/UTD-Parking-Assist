import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';

import './UIOptions.css';

class UIOptions extends Component {
	state = {
		colorBlindTooltipOpen: false,
		colorBlindMode: false,
	};

	componentDidUpdate() {
		const colorBlindStatus = localStorage.getItem('color-blind-status') === 'true';

		if (this.state.colorBlindMode !== colorBlindStatus) {
			this.setState({ colorBlindMode: colorBlindStatus });
		}
	}

	toggleColorBlindMode = () => {
		this.setState(
			{ colorBlindMode: !this.state.colorBlindMode },
			localStorage.setItem('color-blind-status', !this.state.colorBlindMode)
		);
	};

	/* TOOLTIPS */
	toggleColorBlindTooltip = () => {
		this.setState((state, props) => ({ colorBlindTooltipOpen: !state.colorBlindTooltipOpen }));
	};

	render() {
		return (
			<React.Fragment>
				<div className="icons-container">
					<div
						onClick={this.toggleColorBlindMode}
						id="color-blind"
						className="icon pointer dark-icon-border"
					>
						{this.state.colorBlindMode ? (
							<i className="fas fa-eye fa-lg"></i>
						) : (
							<i className="fas fa-low-vision fa-lg"></i>
						)}
					</div>
					<Tooltip
						placement="bottom"
						isOpen={this.state.colorBlindTooltipOpen}
						target="color-blind"
						toggle={this.toggleColorBlindTooltip}
					>
						Color Blind Accessability
					</Tooltip>
				</div>
			</React.Fragment>
		);
	}
}

export default UIOptions;
