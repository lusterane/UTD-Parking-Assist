import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className='footer'>
					<div>
						Made with <i className='fas fa-heart'></i> by{' '}
						<a
							href='https://github.com/lusterane'
							rel='noopener noreferrer'
							target='_blank'
						>
							Toby
						</a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Footer;
