import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';

import ColorOption from './ColorOption/ColorOption';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ColorBlindButton from '../UIOptions/UIOptions';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ParticlesPage from '../ParticlesPage/ParticlesPage';

import './HomePageStyle.css';
import '../../styles/shared/Colors.css';

class Home extends Component {
	//home
	state = {
		showModal: false,
		colorBlindMode: false,
		darkMode: false,
		popoverOpen: false,
	};

	componentDidUpdate() {
		const data = localStorage.getItem('color-blind-status') === 'true';
		const darkMode = localStorage.getItem('dark-mode-status') === 'true';

		if (this.state.darkMode !== darkMode) {
			this.setState({ darkMode: darkMode });
		}
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
				<ParticlesPage parent='HomePage' />
				{this.props.onlineStatusLoaded ? '' : <LoadingSpinner />}
				{this.props.onlineStatus ? (
					<div
						className={
							this.state.darkMode
								? 'content-container dark-mode'
								: 'content-container'
						}
					>
						<ColorBlindButton />
						<Popover
							innerClassName={
								this.state.darkMode
									? 'popover-content dark-mode-off-hue-dark'
									: 'popover-content '
							}
							trigger='hover'
							isOpen={this.state.popoverOpen}
							target='info-text'
							toggle={this.togglePopover}
						>
							<PopoverBody>
								<div
									className={
										this.state.darkMode
											? 'popover-text-container dark-mode-off-hue-dark'
											: 'popover-text-container'
									}
								>
									For <span className='bold'>dark mode</span>, select the{' '}
									<i className='far fa-moon'></i> at the top right.
									<hr></hr>
									For <span className='bold'>color blind accessibility</span>,
									select the <i className='fas fa-low-vision'></i> at the top
									right.
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
							<h1 className={this.props.color + ' title-greeting'}>UTD Parking</h1>
							<div className='sub-title-greeting'>
								<span>Live parking data at your fingertips</span>
							</div>
							<div className='color-option-container'>
								<ColorOption
									color='green'
									colorBlindMode={this.state.colorBlindMode}
									darkMode={this.state.darkMode}
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
									darkMode={this.state.darkMode}
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
									darkMode={this.state.darkMode}
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
									darkMode={this.state.darkMode}
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
									<i className='fas fa-angle-double-right'></i> But, how does it
									work?
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
				) : (
					<React.Fragment>
						<div className='content-container'>
							<Header type='server-warning'></Header>
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
										For <span className='bold'>dark mode</span>, select the{' '}
										<i className='far fa-moon'></i> at the top right.
										<hr></hr>
										For <span className='bold'>color blind accessibility</span>,
										select the <i className='fas fa-low-vision'></i> at the top
										right.
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
								<div className='color-option-container'>
									<ColorOption color='grey' />
									<ColorOption color='grey' />
									<ColorOption color='grey' />
									<ColorOption color='grey' />
								</div>
								<div className='bottom-text-container grey'>
									<span id='info-text'>
										<i className='fas fa-angle-double-right'></i> But, how does
										it work?
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
			</React.Fragment>
		);
	}
}

export default Home;
