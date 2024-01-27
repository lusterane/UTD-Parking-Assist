import React from 'react';
import { Button } from 'reactstrap';
import './ParkingGarageButton.css';

const ParkingGarageButton = (props) => {
	const { color, name, structure } = props;

	const getParkingStructureLink = (structure) => {
		if (structure === 'PS1') {
			return 'https://maps.app.goo.gl/KNFHA2f7EvjYLYpo9';
		} else if (structure === 'PS3') {
			return 'https://maps.app.goo.gl/JvLwDxqK3iCTfdoQ6';
		} else {
			// 'ps4
			return 'https://maps.app.goo.gl/ezUohyTSyzmRHJN48';
		}
	};

	return (
		<React.Fragment>
			<div className="parking-button-container">
				<a
					rel="noopener noreferrer"
					target="_blank"
					href={getParkingStructureLink(structure)}
					className="button-map-link"
				>
					<Button
						color="secondary"
						className={`${color}-button parking-garage-button round-corners pointer button-shadow-${color} border-${color}`}
					>
						<div>
							<i className="fas fa-location-pin fa-lg"></i>
							<i className="fas fa-map-marked-alt fa-lg"></i> {name}
						</div>
					</Button>
				</a>
			</div>
		</React.Fragment>
	);
};

export default ParkingGarageButton;
