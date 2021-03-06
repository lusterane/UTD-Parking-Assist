import React, { Component } from 'react';
import { Spinner, Toast, ToastBody, ToastHeader } from 'reactstrap';

import './LoadingSpinner.css';

class LoadingSpinner extends Component {
	state = {
		textList: [
			'Starting Up Car ...',
			'Running Red Lights ...',
			'Picking Up Coffee ...',
			'Spilling Coffee On Dashboard ...',
			'Parking In Red ...',
			'Running To Class ...',
			'Almost Ready!!!',
		],
		index: 0,
		incrementIndexInterval: '',
		showToastTimeout: '',
		showToast: false,
	};

	componentDidMount() {
		this.setState({
			incrementIndexInterval: setInterval(this.incrementIndex, 2000),
			showToastTimeout: setTimeout(this.toggleToast, 5000),
		});
	}

	componentWillUnmount() {
		clearInterval(this.state.incrementIndexInterval);
		clearTimeout(this.state.showToastTimeout);
	}

	incrementIndex = () => {
		const { textList, index } = this.state;
		if (index < textList.length - 1) {
			this.setState((state, props) => ({
				index: state.index + 1,
			}));
		}
	};

	toggleToast = () => {
		this.setState((state, props) => ({ showToast: !state.showToast }));
	};

	render() {
		const { textList, index } = this.state;
		const { lightMode } = this.props;
		return (
			<div className={lightMode ? 'spinner-container' : 'spinner-container dark-mode opaque'}>
				<div className='loading-center'>
					<Spinner animation='border' role='status'></Spinner>
					<div className='loading-text'>{textList[index]}</div>
					<Toast
						isOpen={this.state.showToast}
						className={lightMode ? '' : 'dark-mode-off-hue-dark opaque'}
					>
						<ToastHeader
							icon={<i className='fas fa-bed'></i>}
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
