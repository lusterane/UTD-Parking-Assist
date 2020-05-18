import React, { Component } from 'react';

import PSCard from './PSCard/PSCard';

import './PSGroup.css';

class PSGroup extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className='card-group-container'>
					<PSCard />
					<PSCard />
					<PSCard />
				</div>
			</React.Fragment>
		);
	}
}

export default PSGroup;
