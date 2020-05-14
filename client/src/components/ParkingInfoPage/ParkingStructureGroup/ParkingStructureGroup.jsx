import React, { Component } from 'react';
import ParkingStructureCard from './ParkingStructureCard/ParkingStructureCard';

import './ParkingStructureGroup.css';

class ParkingStructureGroup extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<ParkingStructureCard parkingStructure='PS1' />{' '}
				<ParkingStructureCard parkingStructure='PS3' />{' '}
				<ParkingStructureCard parkingStructure='PS4' />
				<p className='time'>Updated 12 seconds ago...</p>
			</React.Fragment>
		);
	}
}

export default ParkingStructureGroup;
