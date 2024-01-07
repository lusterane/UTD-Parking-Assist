import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';

import ColorOption from './ColorOption/ColorOption';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import UIOptions from '../UIOptions/UIOptions';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


import './HomePageStyle.css';
import '../../styles/shared/Colors.css';

class Home extends Component {
	state = {
		showModal: false,
		colorBlindMode: false,
		lightMode: true,
		lightModeLoaded: false,
		popoverOpen: false,
	};

	componentDidMount() {
		const lightMode = localStorage.getItem('light-mode-status') === 'true';
		this.setState({ lightMode: lightMode, lightModeLoaded: true });
	}

	componentDidUpdate() {
		const data = localStorage.getItem('color-blind-status') === 'true';
		const lightMode = localStorage.getItem('light-mode-status') === 'true';

		if (this.state.lightMode !== lightMode) {
			this.setState({ lightMode: lightMode });
		}
		if (this.state.colorBlindMode !== data) {
			this.setState({ colorBlindMode: data });
		}
	}

	// maintain popover
	togglePopover = () => {
		this.setState((state, props) => ({ popoverOpen: !state.popoverOpen }));
	};

	// maintain modal
	handleModalClose = () => {
		this.setState({ showModal: false });
	};
	handleModalShow = () => {
		this.setState({ showModal: true });
	};
	handleModalConfirm = () => {
		localStorage.setItem('color', this.props.color);
		this.setState({ showModal: false });
	};

	render() {
		const { lightMode, popoverOpen, lightModeLoaded } = this.state;
		return (
			<React.Fragment>
				<div id="center-text" className={lightMode ? '' : 'dark-mode'}>
					{lightModeLoaded ? '' : <LoadingSpinner lightMode={lightMode} />}
					<div className="content-container">
						<UIOptions />
						<Popover
							innerClassName={
								lightMode
									? 'popover-content'
									: 'popover-content dark-mode-off-hue-dark'
							}
							trigger="hover"
							isOpen={popoverOpen}
							target="info-text"
							toggle={this.togglePopover}
							hideArrow={true}
						>
							<PopoverBody>
								<div
									className={
										lightMode
											? 'popover-text-container'
											: 'popover-text-container dark-mode-off-hue-dark'
									}
								>
									<div className="popover-exit">
										<i
											className="fas fa-times pointer"
											onClick={this.togglePopover}
										></i>
									</div>
									<h3>What is this?</h3>
									<div>
										This site finds the <span className="bold">best</span>{' '}
										parking choices tailored to your permit.
									</div>
									<br></br>
									<hr className={lightMode ? '' : 'white-hr'}></hr>
									<h3>BTW...</h3>

									<div>
										<span className="bold">Light Mode</span>:{' '}
										<i className="far fa-moon"></i> at the top right.
									</div>
									<div>
										<span className="bold">Color Blind Accessibility</span>:{' '}
										<i className="fas fa-low-vision"></i> at the top right.
									</div>
								</div>
							</PopoverBody>
						</Popover>
						<div className="inner-content-container">
							<div className="text-content">
								<h1 className={this.props.color + ' title-greeting'}>
									UTD Parking
								</h1>
								<div className="sub-title-greeting">
									<span>Park Smarter, Not Harder.</span>
								</div>
							</div>
							<div className="color-option-container">
								<ColorOption
									color="green"
									colorBlindMode={this.state.colorBlindMode}
									lightMode={lightMode}
									onClick={() => {
										this.handleModalShow(this.props.color);
									}}
									handleMouseOver={this.props.changeColor}
									handleMouseLeave={() => {
										if (!this.state.showModal) {
											this.props.changeColorDefault();
										}
									}}
								/>
								<ColorOption
									color="gold"
									colorBlindMode={this.state.colorBlindMode}
									lightMode={lightMode}
									onClick={() => {
										this.handleModalShow(this.props.color);
									}}
									handleMouseOver={this.props.changeColor}
									handleMouseLeave={() => {
										if (!this.state.showModal) {
											this.props.changeColorDefault();
										}
									}}
								/>
								<ColorOption
									color="orange"
									colorBlindMode={this.state.colorBlindMode}
									lightMode={lightMode}
									onClick={() => {
										this.handleModalShow(this.props.color);
									}}
									handleMouseOver={this.props.changeColor}
									handleMouseLeave={() => {
										if (!this.state.showModal) {
											this.props.changeColorDefault();
										}
									}}
								/>
								<ColorOption
									color="purple"
									colorBlindMode={this.state.colorBlindMode}
									lightMode={lightMode}
									onClick={() => {
										this.handleModalShow(this.props.color);
									}}
									handleMouseOver={this.props.changeColor}
									handleMouseLeave={() => {
										if (!this.state.showModal) {
											this.props.changeColorDefault();
										}
									}}
								/>
							</div>
							<div className="info-text-container">
								<span id="info-text" className="info-text">
									<i className="fas fa-angle-double-right"></i> What is this?
								</span>
							</div>
							<ConfirmModal
								lightMode={lightMode}
								color={this.props.color}
								showModal={this.state.showModal}
								onModalShow={this.handleModalShow}
								onModalClose={this.handleModalClose}
								onModalConfirm={this.handleModalConfirm}
							/>
						</div>
						<Footer />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
