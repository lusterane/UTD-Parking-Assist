import React, { Component } from 'react';
import Particles from 'react-particles-js';

import './ParticlesPage.css';

class ParticlesPage extends Component {
	state = { color: '', parsedColor: '' };

	componentDidUpdate(prevProps, prevState) {
		let color = '';
		if (prevProps.parent === 'HomePage') {
			color = 'default';
		} else {
			color = localStorage.getItem('color');
		}

		if (prevState.color !== color) {
			this.setState({ color: color, parsedColor: this.parseColor(color) });
		}
	}

	parseColor = (color) => {
		switch (color) {
			case 'green':
				return '#28a746';
			case 'gold':
				return '#f9c938';
			case 'orange':
				return '#ff8c00';
			case 'purple':
				return '#773dbc';
			default:
				return '#c6c6c6'; // grey
		}
	};

	render() {
		return (
			<React.Fragment>
				<Particles
					className='particles-element'
					params={{
						fps_limit: 60,
						particles: {
							color: { value: this.state.parsedColor },
							opacity: { value: 1 },
							number: {
								value: 160,
							},
							size: {
								value: 3,
								random: true,
								anim: {
									speed: 4,
									size_min: 0.3,
								},
							},
							line_linked: {
								enable: false,
							},
							move: {
								random: true,
								speed: 1,
								direction: 'top',
								out_mode: 'out',
							},
						},
						interactivity: {
							detect_on: 'window',
							events: {
								onhover: {
									enable: true,
									mode: 'bubble',
								},
							},
							modes: {
								bubble: {
									distance: 100,
									duration: 2,
									size: 0,
									opacity: 0,
								},
							},
						},
						retina_detect: false,
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ParticlesPage;
