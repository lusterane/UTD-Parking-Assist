import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';

import ColorOption from './ColorOption/ColorOption';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import UIOptions from '../UIOptions/UIOptions';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ParticlesPage from '../ParticlesPage/ParticlesPage';

import './HomePageStyle.css';
import '../../styles/shared/Colors.css';

class Home extends Component {
	//home
	state = {
		showModal: false,
		colorBlindMode: false,
		lightMode: true,
		lightModeLoaded: false,
		popoverOpen: false,
	};

	componentDidMount() {
		const lightMode = localStorage.getItem('light-mode-status') === 'true';
		console.log(localStorage.getItem('light-mode-status'));
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
		const { onlineStatusLoaded, onlineStatus } = this.props;
		return (
			<React.Fragment>
				<div className={lightMode ? '' : 'dark-mode'}>
					<ParticlesPage parent='HomePage' />
					{onlineStatusLoaded && lightModeLoaded ? (
						''
					) : (
						<LoadingSpinner lightMode={lightMode} />
					)}
					{onlineStatus ? (
						<div className='content-container'>
							<UIOptions />
							<Popover
								innerClassName={
									lightMode
										? 'popover-content'
										: 'popover-content dark-mode-off-hue-dark'
								}
								trigger='hover'
								isOpen={popoverOpen}
								target='info-text'
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
										<div className='popover-exit'>
											<i
												className='fas fa-times pointer'
												onClick={this.togglePopover}
											></i>
										</div>
										<h3>What?</h3>
										<div>
											This site finds the <span className='bold'>best</span>{' '}
											parking options based on your permit
										</div>
										<br></br>
										<h3>How?</h3>
										<div>Achieves this by considering.</div>
										<div>
											<ul>
												<li>
													<span>Parking trends</span>
												</li>
												<li>
													<span>Immediate spot availabilty</span>
												</li>
												<li>
													<span>Permit tier</span>
												</li>
											</ul>
										</div>

										<hr className={lightMode ? '' : 'white-hr'}></hr>
										<h3>BTW...</h3>

										<div>
											<span className='bold'>Light Mode</span>:{' '}
											<i className='far fa-moon'></i> at the top right.
										</div>
										<div>
											<span className='bold'>Color Blind Accessibility</span>:{' '}
											<i className='fas fa-low-vision'></i> at the top right.
										</div>
									</div>
								</PopoverBody>
							</Popover>
							<div className='inner-content-container'>
								<h1 className={this.props.color + ' title-greeting'}>
									UTD Parking
								</h1>
								<div className='sub-title-greeting'>
									<span>Live parking data at your fingertips</span>
								</div>
								<div className='color-option-container'>
									<ColorOption
										color='green'
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
										color='gold'
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
										color='orange'
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
										color='purple'
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
								<div className='info-text-container'>
									<span id='info-text' className='info-text'>
										<i className='fas fa-angle-double-right'></i> What is this?
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
					) : (
						<React.Fragment>
							<div className='content-container'>
								<Header type='server-warning'></Header>
								<Popover
									innerClassName={
										lightMode
											? 'popover-content'
											: 'popover-content dark-mode-off-hue-dark'
									}
									trigger='hover'
									isOpen={popoverOpen}
									target='info-text'
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
											<div className='popover-exit'>
												<i
													className='fas fa-times pointer'
													onClick={this.togglePopover}
												></i>
											</div>
											<span>
												For <span className='bold'>dark mode</span>, select
												the <i className='far fa-moon'></i> at the top
												right.
											</span>
											<hr className={lightMode ? 'white-hr' : ''}></hr>
											<span>
												For{' '}
												<span className='bold'>
													color blind accessibility
												</span>
												, select the <i className='fas fa-low-vision'></i>{' '}
												at the top right.
											</span>
											<hr className={lightMode ? 'white-hr' : ''}></hr>
											<p>UTD Permits works on shared tiers:</p>
											<div className='color-access-listings'>
												<p>
													<span className='green'>Green Permit</span>{' '}
													parks [<span className='green'>Green</span>]
												</p>
												<p>
													<span className='gold'>Gold</span> parks [
													<span className='green'>Green</span>
													{' & '}
													<span className='gold'>Gold</span>]
												</p>
												<p>
													<span className='purple'>Purple</span> parks
													<span className='green'>Green</span>,
													<span className='gold'>Gold</span>,
													<span className='orange'>Orange</span>
													{' & '}
													<span className='purple'>Purple</span>]
												</p>
											</div>
										</div>
									</PopoverBody>
								</Popover>
								<div className='inner-content-container'>
									<h1 className={'grey title-greeting'}>UTD Parking</h1>
									<p className={'grey'}>Live parking data at your fingertips</p>
									<div className='color-option-container'>
										<ColorOption color='grey' />
										<ColorOption color='grey' />
										<ColorOption color='grey' />
										<ColorOption color='grey' />
									</div>
									<div className='info-text-container grey'>
										<span id='info-text'>
											<i className='fas fa-angle-double-right'></i> But, how
											does it work?
										</span>
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
						</React.Fragment>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
