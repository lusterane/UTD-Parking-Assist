import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

import './LoadingSpinner.css';

class LoadingSpinner extends Component {
	state = {
		textList: [
			'Starting Up Car ...',
			'Running Red Lights ...',
			'Picking Up Coffee ...',
			'Spilling Coffee On Dashboard ...',
			'Taking Up Two Spaces ...',
			'Almost Ready!!',
		],
		index: 0,
		incrementIndexTimeout: '',
	};

	componentDidMount() {
		this.setState({
			incrementIndexTimeout: setInterval(this.incrementIndex, 2000),
		});
	}

	componentWillUnmount() {
		clearTimeout(this.state.incrementIndexTimeout);
	}

	incrementIndex = () => {
		const { textList, index } = this.state;
		if (index < textList.length - 1) {
			this.setState((state, props) => ({
				index: state.index + 1,
			}));
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
