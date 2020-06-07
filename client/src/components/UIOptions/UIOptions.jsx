import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';

import './UIOptions.css';

class UIOptions extends Component {
	state = {
		colorBlindTooltipOpen: false,
		colorBlindMode: false,
		lightModeTooltipOpen: false,
		lightMode: false,
	};

	componentDidUpdate() {
		const lightMode = localStorage.getItem('light-mode-status') === 'true';
		const colorBlindStatus = localStorage.getItem('color-blind-status') === 'true';

		if (this.state.lightMode !== lightMode) {
			this.setState({ lightMode: lightMode });
		}

		if (this.state.colorBlindMode !== colorBlindStatus) {
			this.setState({ colorBlindMode: colorBlindStatus });
		}
	}

	togglelightMode = () => {
		this.setState(
			{ lightMode: !this.state.lightMode },
			localStorage.setItem('light-mode-status', !this.state.lightMode)
		);
	};

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

	togglelightModeTooltip = () => {
		this.setState((state, props) => ({ lightModeTooltipOpen: !state.lightModeTooltipOpen }));
	};
	render() {
		const { lightMode } = this.state;
		return (
			<React.Fragment>
				<div className='icons-container'>
					<div
						onClick={this.togglelightMode}
						id='dark-mode'
						className={lightMode ? 'icon pointer' : 'icon pointer dark-icon-border '}
					>
						{lightMode ? (
							<i className='fas fa-moon fa-lg'></i>
						) : (
							<i className='far fa-moon fa-lg'></i>
						)}
					</div>

					<div
						onClick={this.toggleColorBlindMode}
						id='color-blind'
						className={lightMode ? 'icon pointer' : 'icon pointer dark-icon-border '}
					>
						{this.state.colorBlindMode ? (
							<i className='fas fa-eye fa-lg'></i>
						) : (
							<i className='fas fa-low-vision fa-lg'></i>
						)}
					</div>
					<Tooltip
						placement='bottom'
						isOpen={this.state.lightModeTooltipOpen}
						target='dark-mode'
						toggle={this.togglelightModeTooltip}
					>
						Light Mode
					</Tooltip>
					<Tooltip
						placement='bottom'
						isOpen={this.state.colorBlindTooltipOpen}
						target='color-blind'
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
