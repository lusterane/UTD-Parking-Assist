import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className='footer'>
					<p>
						Made with <i className='fas fa-heart'></i> by{' '}
						<a
							href='https://github.com/lusterane'
							rel='noopener noreferrer'
							target='_blank'
						>
							Toby
						</a>
						.
					</p>
					<p class='sub-text'>
						Like the project? A <i className='far fa-star'></i> on the{' '}
						<a
							href='https://github.com/lusterane/UTD-Parking-Assist'
							rel='noopener noreferrer'
							target='_blank'
						>
							repo
						</a>{' '}
						is much appeciated :D
					</p>
				</div>
			</React.Fragment>
		);
	}
}

export default Footer;
