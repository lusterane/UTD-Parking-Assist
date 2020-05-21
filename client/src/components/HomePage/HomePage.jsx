import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

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
	};

	componentDidUpdate() {
		const data = localStorage.getItem('color-blind-status') === 'true';

		if (this.state.colorBlindMode !== data) {
			this.setState({ colorBlindMode: data });
		}
	}

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
