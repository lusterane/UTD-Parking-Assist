import React from 'react';
import { Button } from 'reactstrap';
import ReactGA from 'react-ga4';

import './ParkingGarageButton.css';

const ParkingGarageButton = (props) => {
	const { disabled, index, color, name, structure } = props;

	const getMessage = () => {
		if (disabled) {
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
				<span className="gold best-choice-container">
					<i className="fas fa-star"></i>
					<span>BEST CHOICE</span>
				</span>
			);
		}

		return '';
	};

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

	const handleButtonClick = () => {
		ReactGA.event({
			category: 'button_press',
			action: 'navigate_map',
			label: 'navigated to ' + structure + "'s map",
		});
	};

	return (
		<React.Fragment>
			<div className="message-container">{getMessage()}</div>
			{disabled ? (
				<React.Fragment>
					<div className="parking-button-container">
						<Button
							color="secondary"
							className={`disabled parking-garage-button round-corners`}
							disabled
						>
							<div>
								<i className="fas fa-map-marked-alt fa-lg"></i> {name}
							</div>
						</Button>
					</div>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div className="parking-button-container">
						<a
							rel="noopener noreferrer"
							target="_blank"
							href={getParkingStructureLink(structure)}
							className="button-map-link"
						>
							<Button
								onClick={handleButtonClick}
								color="secondary"
								className={`${color}-button parking-garage-button round-corners pointer button-shadow-${color} border-${color}`}
							>
								<div>
									<i className="fas fa-map-marked-alt fa-lg"></i> PARK HERE!
								</div>
							</Button>
						</a>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default ParkingGarageButton;
