import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';

import './UIOptions.css';

class UIOptions extends Component {
	state = {
		colorBlindTooltipOpen: false,
		colorBlindMode: false,
		darkModeTooltipOpen: false,
		darkMode: false,
	};

	componentDidUpdate() {
		const darkMode = localStorage.getItem('dark-mode-status') === 'true';
		const colorBlindStatus = localStorage.getItem('color-blind-status') === 'true';

		if (this.state.darkMode !== darkMode) {
			this.setState({ darkMode: darkMode });
		}

		if (this.state.colorBlindMode !== colorBlindStatus) {
			this.setState({ colorBlindMode: colorBlindStatus });
		}
	}

	toggleDarkMode = () => {
		this.setState(
			{ darkMode: !this.state.darkMode },
			localStorage.setItem('dark-mode-status', !this.state.darkMode)
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

	toggleDarkModeTooltip = () => {
		this.setState((state, props) => ({ darkModeTooltipOpen: !state.darkModeTooltipOpen }));
	};
	render() {
		const { darkMode } = this.state;
		return (
			<React.Fragment>
				<div className='icons-container'>
					<div
						onClick={this.toggleDarkMode}
						id='dark-mode'
						className={darkMode ? 'dark-icon-border icon pointer' : 'icon pointer'}
					>
						{darkMode ? (
							<i className='fas fa-moon fa-lg'></i>
						) : (
							<i className='far fa-moon fa-lg'></i>
						)}
					</div>

					<div
						onClick={this.toggleColorBlindMode}
						id='color-blind'
						className={darkMode ? 'dark-icon-border icon pointer' : 'icon pointer'}
					>
						{this.state.colorBlindMode ? (
							<i className='fas fa-eye fa-lg'></i>
						) : (
							<i className='fas fa-low-vision fa-lg'></i>
						)}
					</div>
					<Tooltip
						placement='bottom'
						isOpen={this.state.darkModeTooltipOpen}
						target='dark-mode'
						toggle={this.toggleDarkModeTooltip}
					>
						Dark Mode
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
