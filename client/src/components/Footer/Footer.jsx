import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<React.Fragment>
			<div className="footer-container dark-mode">
				<div>
					Made with <i className="fas fa-heart"></i> by{' '}
					<a
						href="https://github.com/lusterane"
						rel="noopener noreferrer"
						target="_blank"
					>
						Toby
					</a>
					.
				</div>
				<div className="footer-sub-text">
					Like the project? A <i className="far fa-star"></i> on the{' '}
					<a
						href="https://github.com/lusterane/UTD-Parking-Assist"
						rel="noopener noreferrer"
						target="_blank"
					>
						repo
					</a>{' '}
					is much appreciated :D
				</div>
			</div>
		</React.Fragment>
	);
}

export default Footer;
