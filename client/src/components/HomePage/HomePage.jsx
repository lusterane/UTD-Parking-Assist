import React, { Component } from 'react';
import { Spinner, Popover, PopoverBody } from 'reactstrap';

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
	togglePopover = () => {
		this.setState({ popoverOpen: !this.state.popoverOpen });
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
		return (
			<React.Fragment>
				{this.props.onlineStatusLoaded ? (
					''
				) : (
					<div className='spinner-container'>
						<Spinner animation='border' role='status'></Spinner>
					</div>
				)}
				{this.props.onlineStatus ? (
					<>
						<div className='content-container'>
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
										For color blind accessibility, select the{' '}
										<i className='fas fa-low-vision'></i> at the top right.
										<hr></hr>
										<p>UTD Permits works on shared tiers:</p>
										<div className='color-access-listings'>
											<p>
												<span className='green'>Green</span> accesses [
												<span className='green'>Green</span>]
											</p>
											<p>
												<span className='gold'>Gold</span> accesses [
												<span className='green'>Green</span>
												{' & '}
												<span className='gold'>Gold</span>]
											</p>
											<p>
												<span className='purple'>Purple</span> accesses [
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
								<h1 className={this.props.color + ' title-greeting'}>
									UTD Parking
								</h1>
								<p>Live parking data at your fingertips</p>
								{/* <h1 className={this.props.color + ' title-greeting'}>
										{this.props.getGreeting()}
									</h1> */}

								<div className='color-option-container'>
									<ColorOption
										color='green'
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
										color='gold'
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
										color='orange'
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
										color='purple'
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
								<div id='info-text' className='bottom-text-container'>
									<p>But, how does it work?</p>
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
					</>
				) : (
					<React.Fragment>
						<Header type='server-warning'></Header>
						<div className='content-container'>
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
										For color blind accessibility, select the{' '}
										<i className='fas fa-low-vision'></i> at the top right.
										<hr></hr>
										<p>UTD Permits works on shared tiers:</p>
										<div className='color-access-listings'>
											<p>
												<span className='green'>Green</span> accesses [
												<span className='green'>Green</span>]
											</p>
											<p>
												<span className='gold'>Gold</span> accesses [
												<span className='green'>Green</span>
												{' & '}
												<span className='gold'>Gold</span>]
											</p>
											<p>
												<span className='purple'>Purple</span> accesses [
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
								{/* <h1 className={this.props.color + ' title-greeting'}>
										{this.props.getGreeting()}
									</h1> */}

								<div className='color-option-container'>
									<ColorOption color='grey' />
									<ColorOption color='grey' />
									<ColorOption color='grey' />
									<ColorOption color='grey' />
								</div>
								<div id='info-text' className='bottom-text-container grey'>
									<p>But, how does it work?</p>
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
			</React.Fragment>
		);
	}
}

export default Home;
