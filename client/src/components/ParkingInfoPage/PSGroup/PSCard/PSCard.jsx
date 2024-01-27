import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import FullPSCardBody from './FullPSCardBody/FullPSCardBody.jsx';
import './PSCard.css';
import '../../../../styles/shared/Colors.css';
import ParkingGarageButton from './ParkingGarageButton/ParkingGarageButton.jsx';
import Time from '../../Time/Time.jsx';
import PSCardHeader from './PSCardHeader/PSCardHeader.jsx';
import PSCardBody from './FullPSCardBody/PSCardBody/PSCardBody.jsx';

const PSCard = (props) => {
	const [index, setIndex] = useState(0);
	const [currentPermit, setCurrentPermit] = useState({
		id: -1,
		spots: -1,
		structure: 'ps1',
		color: 'green',
		level: -1,
	});
	const [colorBlindMode, setColorBlindMode] = useState(false);

	useEffect(() => {
		// Initialize current permit
		if (currentPermit.id === -1 && props.dataArr.length > 0) {
			setCurrentPermit(props.dataArr[0]);
		}

		// Get color blind status
		const data = localStorage.getItem('color-blind-status') === 'true';
		if (colorBlindMode !== data) {
			setColorBlindMode(data);
		}
	}, [props.dataArr, currentPermit, colorBlindMode]);

	const handleIncrementUpdate = () => {
		const newIndex = index + 1;
		setIndex(newIndex);
		setCurrentPermit(props.dataArr[newIndex]);
	};

	const handleDecrementUpdate = () => {
		const newIndex = index - 1;
		setIndex(newIndex);
		setCurrentPermit(props.dataArr[newIndex]);
	};

	const getFullGarageName = (garage) => {
		switch (garage) {
			case 'PS1':
				return 'PARKING GARAGE 1';
			case 'PS3':
				return 'PARKING GARAGE 3';
			default:
				return 'PARKING GARAGE 4';
		}
	};

	const bestChoiceClassName = () => {
		return index === 0 ? 'best-choice' : '';
	};

	const { spots, color, level } = currentPermit;

	return (
		<React.Fragment>
			<Card
				className={`ps-card round-corners dark-mode-off-hue-dark ${bestChoiceClassName()}`}
			>
				{props.dataArr.length !== 0 ? (
					<Card.Body>
						<PSCardHeader color={color} index={index} />
						<div className="card-content">
							<div className="ps-card-body">
								{index !== 0 ? (
									<div>
										<div
											onClick={handleDecrementUpdate}
											className="left-clickable pointer"
										></div>
										<div className="arrow-container">
											<i className="arrow fas fa-caret-left"></i>
										</div>
									</div>
								) : (
									<div>
										<div className="arrow-container">
											<i className="grey-arrow arrow fas fa-caret-left"></i>
										</div>
									</div>
								)}
								<PSCardBody
									spots={spots}
									level={level}
									color={color}
									colorBlindMode={colorBlindMode}
								/>

								{index !== props.dataArr.length - 1 ? (
									<div>
										<div
											className="right-clickable pointer"
											onClick={handleIncrementUpdate}
										></div>
										<div className="arrow-container">
											<i className="arrow fas fa-caret-right"></i>
										</div>
									</div>
								) : (
									<div>
										<div className="arrow-container">
											<i className="grey-arrow arrow fas fa-caret-right"></i>
										</div>
									</div>
								)}
							</div>
						</div>
						<div className="ps-card-footer">
							<ParkingGarageButton
								name={getFullGarageName(props.structure)}
								color={color}
								structure={props.structure}
							/>
							<Time timeUpdated={props.timeUpdated} />
						</div>
					</Card.Body>
				) : (
					<FullPSCardBody structure={getFullGarageName(props.structure)} />
				)}
			</Card>
		</React.Fragment>
	);
};

export default PSCard;
