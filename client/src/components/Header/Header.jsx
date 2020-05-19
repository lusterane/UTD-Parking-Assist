import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

import './Header.css';

class Header extends Component {
	state = {};

	serverWarningAlert = () => {
		return (
			<Alert style={{ textAlign: 'center' }} variant='warning'>
				<i className='fas fa-exclamation-circle fa-lg'></i>
				To conserve server loads, servers will rest outside of 8:00AM - 8:00PM CST
			</Alert>
		);
	};

	serverDownAlert = () => {
		return (
			<Alert style={{ textAlign: 'center' }} variant='danger'>
				<i class='fas fa-exclamation-triangle fa-lg'></i>
				Servers are down. I'm either broke or this is unexpected. Kindly{' '}
				<a href='mailto: tobychow98@gmail.com?subject=UTD Parking Assist: Website Issue'>
					contact me
				</a>{' '}
				if it's the latter.
			</Alert>
		);
	};

	getServerTextFromProps = () => {
		const { type } = this.props;
		if (type === 'server-warning') {
			return this.serverWarningAlert();
		} else if (type === 'server-down') {
			return this.serverDownAlert();
		}
	};

	render() {
		return (
			<React.Fragment>
				<div className='header-container'>{this.getServerTextFromProps()}</div>
			</React.Fragment>
		);
	}
}

export default Header;
