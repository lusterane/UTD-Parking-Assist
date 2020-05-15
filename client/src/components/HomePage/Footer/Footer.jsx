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
					<div className='bottom-text'>
						<p>
							Interested in the project? Check it out at the{' '}
							<a
								href='https://github.com/lusterane/UTD-Parking-Assist'
								rel='noopener noreferrer'
								target='_blank'
							>
								Github
							</a>{' '}
							repo.
						</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Footer;
