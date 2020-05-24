import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

import './LoadingSpinner.css';

class LoadingSpinner extends Component {
	state = {
		textList: [
			'Starting Up Car ...',
			'Engaging In Drag Race ...',
			'Running Red Lights ...',
			'Parking In Purple ...',
			'Taking Up Two Spaces ...',
			"Almost Done!! Don't Refresh!",
		],
		index: 0,
		incrementIndexTimeout: '',
	};

	componentDidMount() {
		this.setState({
			incrementIndexTimeout: setInterval(this.incrementIndex, 1200),
		});
	}

	componentWillUnmount() {
		clearTimeout(this.state.incrementIndexTimeout);
	}

	incrementIndex = () => {
		const { textList, index } = this.state;
		if (index < textList.length - 1) {
			this.setState((state, props) => {
				index: state.index += 1;
			});
		}
	};

	render() {
		const { textList, index } = this.state;
		return (
			<div className='spinner-container'>
				<Spinner animation='border' role='status'></Spinner>
				<div className='loading-text'>{textList[index]}</div>
			</div>
		);
	}
}

export default LoadingSpinner;
