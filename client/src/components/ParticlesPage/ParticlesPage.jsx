import React, { Component } from 'react';
import Particles from 'react-particles-js';

import './ParticlesPage.css';

class ParticlesPage extends Component {
	state = { color: '', parsedColor: '' };

	componentDidUpdate(prevProps, prevState) {
		let color = '';
		if (prevProps.parent === 'HomePage') {
			console.log('home');
			color = 'default';
		} else {
			console.log('other page');
			// other page is parent
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
						interactivity: {
							detect_on: 'window',
							events: {
								onhover: {
									enable: true,
									mode: 'repulse',
									parallax: { enable: false, force: 60, smooth: 10 },
								},
								resize: true,
							},
							modes: {
								repulse: { distance: 200, duration: 0.4 },
							},
						},
						particles: {
							color: { value: this.state.parsedColor },
							line_linked: {
								color: this.state.parsedColor,
								distance: 150,
								enable: true,
								opacity: 0.4,
								width: 1,
							},
							move: {
								attract: { enable: false, rotateX: 600, rotateY: 1200 },
								bounce: false,
								direction: 'none',
								enable: true,
								out_mode: 'out',
								random: false,
								speed: 2,
								straight: false,
							},
							number: { density: { enable: true, value_area: 800 }, value: 80 },
							opacity: {
								anim: {
									enable: false,
									opacity_min: 0.1,
									speed: 1,
									sync: false,
								},
								random: false,
								value: 0.5,
							},
							size: {
								anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
								random: true,
								value: 5,
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
