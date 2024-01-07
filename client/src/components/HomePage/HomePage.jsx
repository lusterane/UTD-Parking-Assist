import React, { Component } from 'react';
import ColorOption from './ColorOption/ColorOption';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import Footer from '../Footer/Footer';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import './HomePageStyle.css';
import '../../styles/shared/Colors.css';

class Home extends Component {
	state = {
		showModal: false,
		colorBlindMode: false,
		popoverOpen: false,
	};

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
		const { popoverOpen } = this.state;
		return (
			<React.Fragment>
				<div id="center-text" className="dark-mode">
					<div className="content-container">
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
							<ConfirmModal
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
