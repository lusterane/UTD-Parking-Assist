import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import FullPSCardBody from './FullPSCardBody/FullPSCardBody.jsx';
import './PSCard.css';
import '../../../../styles/shared/Colors.css';
import ParkingGarageButton from './ParkingGarageButton/ParkingGarageButton.jsx';
import Time from '../../Time/Time.jsx';

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
						<div className="card-content">
							{index !== 0 ? (
								<div
									onClick={handleDecrementUpdate}
									className="pointer arrow-container"
								>
									<i className="arrow fas fa-caret-left"></i>
								</div>
							) : (
								<div className="arrow-container">
									<i className="grey-arrow arrow fas fa-caret-left"></i>
								</div>
							)}
							<div className="ps-card-body">
								<div className="text-muted ps-card-header">
									<div className="best-choice-container">
										{index === 0 ? (
											<span
												className="gold best-choice-text"
												id="best-choice"
											>
												<i className="fas fa-star"></i> BEST CHOICE
											</span>
										) : (
											''
										)}
									</div>
								</div>
								<div className="text">
									<p className="main-text">
										<span className={`${color}-text`}>{spots}</span> SPACES
									</p>
									<p className="sub-text">Level {level}</p>

									{colorBlindMode ? (
										<p className={'sub-text border-' + color}>
											{color === 'payBySpace'
												? 'PAY BY SPACE'
												: color.toUpperCase()}
										</p>
									) : (
										<p className="sub-text">
											Color <i className={'fas fa-circle ' + color}></i>
										</p>
									)}
								</div>
								<div className="ps-card-footer">
									<ParkingGarageButton
										name={getFullGarageName(props.structure)}
										color={color}
										structure={props.structure}
									/>
									<Time timeUpdated={props.timeUpdated} />
								</div>
							</div>
							{index !== props.dataArr.length - 1 ? (
								<div
									onClick={handleIncrementUpdate}
									className="arrow-container pointer"
								>
									<i className="arrow fas fa-caret-right"></i>
								</div>
							) : (
								<div className="arrow-container right-container">
									<i className="grey-arrow arrow fas fa-caret-right"></i>
								</div>
							)}
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
