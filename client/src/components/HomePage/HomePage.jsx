import React, { Component } from 'react';
import { Spinner, Button, Popover, PopoverBody, PopoverHeader } from 'reactstrap';

import ColorOption from './ColorOption/ColorOption';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import Footer from './Footer/Footer';
import Header from '../Header/Header';
import ColorBlindButton from '../ColorBlindButton/ColorBlindButton';

import './HomePageStyle.css';
import '../../styles/shared/Colors.css';
import '../../styles/shared/LoadingSpinner.css';

class Home extends Component {
	//home
	state = {
		showModal: false,
		colorBlindMode: false,
		popoverOpen: false,
	};

	componentDidUpdate() {
		const data = localStorage.getItem('color-blind-status') === 'true';

		if (this.state.colorBlindMode !== data) {
			this.setState({ colorBlindMode: data });
		}
	}
	// maintain popover
	togglePopover = () => this.setState({ popoverOpen: !this.state.popoverOpen });

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

	handleMouseLeave = () => {
		if (!this.state.showModal) {
			this.props.changeColorDefault();
		}
	};

	render() {
		return (
			<React.Fragment>
				{this.props.onlineStatusLoaded ? (
					''
				) : (
					<div className='spinner-container'>
						<Spinner animation='border' role='status'>
							<span className='sr-only'>Loading...</span>
						</Spinner>
					</div>
				)}
				{this.props.onlineStatus ? (
					<>
						<ColorBlindButton />
						<Popover
							innerClassName='popover-content'
							trigger='hover'
							placement='bottom'
							isOpen={this.state.popoverOpen}
							target='info-text'
							toggle={this.togglePopover}
							flip={true}
						>
							<PopoverBody>
								<div className='popover-text-container'>
									If any visual impairements, select the{' '}
									<i className='fas fa-low-vision'></i> at the top right.
									<hr></hr>
									<p>UTD Permits works on shared tiers:</p>
									<div className='color-access-listings'>
										<p>
											<span className='green'>Green</span> accesses{' '}
											<span className='green'>Green</span>
										</p>
										<p>
											<span className='gold'>Gold</span> accesses{' '}
											<span className='green'>Green</span>,and{' '}
											<span className='gold'>Gold</span>
										</p>
										<p>
											<span className='purple'>Purple</span> accesses{' '}
											<span className='green'>Green</span>,
											<span className='gold'>Gold</span>,
											<span className='orange'>Orange</span>,and{' '}
											<span className='purple'>Purple</span>
										</p>
									</div>
								</div>
							</PopoverBody>
						</Popover>
						<div className='content-container'>
							<div className='row'>
								<div className='col'>
									<h1 className={this.props.color + ' title-greeting'}>
										UTD Parking
									</h1>
									<p>Live parking data at your fingertips</p>
									{/* <h1 className={this.props.color + ' title-greeting'}>
										{this.props.getGreeting()}
									</h1> */}

									<div className='row'>
										<ColorOption
											color='green'
											colorBlindMode={this.state.colorBlindMode}
											onClick={() => {
												this.handleModalShow(this.props.color);
											}}
											handleMouseOver={this.props.changeColor}
											handleMouseLeave={this.handleMouseLeave}
										/>
										<ColorOption
											color='gold'
											colorBlindMode={this.state.colorBlindMode}
											onClick={() => {
												this.handleModalShow(this.props.color);
											}}
											handleMouseOver={this.props.changeColor}
											handleMouseLeave={this.handleMouseLeave}
										/>
										<ColorOption
											color='orange'
											colorBlindMode={this.state.colorBlindMode}
											onClick={() => {
												this.handleModalShow(this.props.color);
											}}
											handleMouseOver={this.props.changeColor}
											handleMouseLeave={this.handleMouseLeave}
										/>
										<ColorOption
											color='purple'
											colorBlindMode={this.state.colorBlindMode}
											onClick={() => {
												this.handleModalShow(this.props.color);
											}}
											handleMouseOver={this.props.changeColor}
											handleMouseLeave={this.handleMouseLeave}
										/>
									</div>
								</div>
							</div>
							<div id='info-text' className='bottom-text row'>
								<div className='col'>
									<p>But, how does it work?</p>
								</div>
							</div>
							<ConfirmModal
								color={this.props.color}
								showModal={this.state.showModal}
								onModalShow={this.handleModalShow}
								onModalClose={this.handleModalClose}
								onModalConfirm={this.handleModalConfirm}
							/>
						</div>
					</>
				) : (
					<React.Fragment>
						<Header type='server-warning'></Header>
						<div className='content-container'>
							<div className='row'>
								<div className='col'>
									<h1 className={'grey title-greeting'}>UTD Parking</h1>
									{/* <h1 className={this.props.color + ' title-greeting'}>
										{this.props.getGreeting()}
									</h1> */}
									<p className={'grey'}>Live parking data at your fingertips</p>
									<div className='row'>
										<ColorOption color='grey' />
										<ColorOption color='grey' />
										<ColorOption color='grey' />
										<ColorOption color='grey' />
									</div>
								</div>
							</div>
						</div>
					</React.Fragment>
				)}
				<Footer />
			</React.Fragment>
		);
	}
}

export default Home;
