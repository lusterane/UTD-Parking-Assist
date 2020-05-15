import React, { Component } from 'react';
import { Alert, Spinner } from 'react-bootstrap';

import ColorOption from './ColorOption/ColorOption';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import Footer from './Footer/Footer';
import Header from '../Header/Header';

import './HomePageStyle.css';
import '../../styles/shared/Colors.css';
import '../../styles/shared/LoadingSpinner.css';

class Home extends Component {
	state = {
		showModal: false,
	};

	handleModalClose = () => {
		this.setState({ showModal: false });
	};
	handleModalShow = (color) => {
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
				{this.props.isLoaded ? (
					<div>
						{this.props.onlineStatus ? '' : <Header type='server-warning'></Header>}
						<div className='container center'>
							<div className='row'>
								<div className='col'>
									<h1 className={this.props.color + ' title-greeting'}>
										{this.props.getGreeting()}
									</h1>
									<div className='row'>
										<ColorOption
											color='green'
											onClick={() => {
												this.handleModalShow(this.props.color);
											}}
											handleMouseOver={this.props.changeColor}
											handleMouseLeave={this.handleMouseLeave}
										/>
										<ColorOption
											color='gold'
											onClick={() => {
												this.handleModalShow(this.props.color);
											}}
											handleMouseOver={this.props.changeColor}
											handleMouseLeave={this.handleMouseLeave}
										/>
										<ColorOption
											color='orange'
											onClick={() => {
												this.handleModalShow(this.props.color);
											}}
											handleMouseOver={this.props.changeColor}
											handleMouseLeave={this.handleMouseLeave}
										/>
										<ColorOption
											color='purple'
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
					</div>
				) : (
					<div className='spinner-container'>
						<Spinner animation='border' role='status'>
							<span className='sr-only'>Loading...</span>
						</Spinner>
					</div>
				)}
				<Footer />
			</React.Fragment>
		);
	}
}

export default Home;
