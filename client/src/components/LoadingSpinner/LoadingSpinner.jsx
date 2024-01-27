import React, { Component } from 'react';
import { Spinner, Toast, ToastBody, ToastHeader } from 'reactstrap';
import './LoadingSpinner.css';

class LoadingSpinner extends Component {
	state = {
		textList: [
			'Dodging Campus Squirrels...',
			'Searching for Lost Car Keys...',
			'Arguing with the GPS...',
			'Considering a Career as a Valet...',
			'Rehearsing Excuses for Being Late...',
			'Waiting for the Pedestrian... Again...',
			'Avoiding Speed Bumps at Light Speed...',
			'Challenging the One-Way Sign...',
			'Revving Up for a Parking Showdown...',
			'Scouting for Free Parking Real Estate...',
			"Contemplating the Meaning of 'No Parking Anytime'...",
			'Mimicking a Parking Sensor Beep...',
			'Consulting the Stars for a Closer Spot...',
			'Jousting for the Corner Spot...',
			'Summoning Patience at the Parking Gate...',
		],
		index: 0,
		showToastTimeout: '',
		showToast: false,
	};

	componentDidMount() {
		this.setState({
			shuffleTextInterval: setInterval(this.shuffleTextList, 2000),
			showToastTimeout: setTimeout(this.toggleToast, 5000),
		});
	}

	componentWillUnmount() {
		clearInterval(this.state.shuffleTextInterval);
		clearTimeout(this.state.showToastTimeout);
	}

	shuffleTextList = () => {
		const shuffled = this.state.textList
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
		this.setState({ textList: shuffled });
	};

	toggleToast = () => {
		this.setState((state, props) => ({ showToast: !state.showToast }));
	};

	render() {
		const { textList, index } = this.state;
		return (
			<div className="spinner-container dark-mode opaque">
				<div className="loading-center">
					<Spinner animation="border" role="status"></Spinner>
					<div className="loading-text">{textList[index]}</div>
					<Toast isOpen={this.state.showToast} className="dark-mode-off-hue-dark opaque">
						<ToastHeader
							icon={<i className="fas fa-bed"></i>}
							toggle={this.toggleToast}
						>
							Waking Up
						</ToastHeader>
						<ToastBody>
							<span>
								Looks like the server's waking up. Don't worry, this won't take
								long.
							</span>
						</ToastBody>
					</Toast>
				</div>
			</div>
		);
	}
}

export default LoadingSpinner;