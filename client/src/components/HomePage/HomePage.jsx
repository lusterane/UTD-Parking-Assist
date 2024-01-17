import React, { useState } from 'react';
import ColorOption from './ColorOption/ColorOption';
import ConfirmModal from './ConfirmModal/ConfirmModal';

import './HomePageStyle.css';
import '../../styles/shared/Colors.css';

function Home(props) {
	const [showModal, setShowModal] = useState(false);

	// maintain modal
	const handleModalClose = () => {
		setShowModal(false);
	};

	const handleModalShow = () => {
		setShowModal(true);
	};

	const handleModalConfirm = () => {
		localStorage.setItem('color', props.color);
		setShowModal(false);
	};

	return (
		<React.Fragment>
			<div id="center-text" className="dark-mode">
				<div className="content-container">
					<div className="inner-content-container">
						<div className="text-content">
							<h1 className={props.color + ' title-greeting'}>UTD Parking</h1>
							<div className="sub-title-greeting">
								<span>Park Smarter, Not Harder</span>
							</div>
						</div>
						<div className="color-option-container">
							<ColorOption
								color="gold"
								colorBlindMode={props.colorBlindMode}
								onClick={() => {
									handleModalShow(props.color);
								}}
								handleMouseOver={props.changeColor}
								handleMouseLeave={() => {
									if (!showModal) {
										props.changeColorDefault();
									}
								}}
							/>
							<ColorOption
								color="orange"
								colorBlindMode={props.colorBlindMode}
								onClick={() => {
									handleModalShow(props.color);
								}}
								handleMouseOver={props.changeColor}
								handleMouseLeave={() => {
									if (!showModal) {
										props.changeColorDefault();
									}
								}}
							/>
							<ColorOption
								color="purple"
								colorBlindMode={props.colorBlindMode}
								onClick={() => {
									handleModalShow(props.color);
								}}
								handleMouseOver={props.changeColor}
								handleMouseLeave={() => {
									if (!showModal) {
										props.changeColorDefault();
									}
								}}
							/>
							<ColorOption
								color="payBySpace"
								colorBlindMode={props.colorBlindMode}
								onClick={() => {
									handleModalShow(props.color);
								}}
								handleMouseOver={props.changeColor}
								handleMouseLeave={() => {
									if (!showModal) {
										props.changeColorDefault();
									}
								}}
							/>
						</div>
						<ConfirmModal
							color={props.color}
							showModal={showModal}
							onModalShow={handleModalShow}
							onModalClose={handleModalClose}
							onModalConfirm={handleModalConfirm}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
