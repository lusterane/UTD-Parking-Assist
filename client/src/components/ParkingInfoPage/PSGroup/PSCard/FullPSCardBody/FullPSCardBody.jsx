import React, { Component } from 'react';
import './FullPSCardBody.css';
class FullPSCardBody extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="full-text-container">
					<p className="full-title">
						<i class="fas fa-hippo"></i>
					</p>
					<p className="full-subtext">Sorry, this parking garage is unavailable!</p>
				</div>
			</React.Fragment>
		);
	}
}

export default FullPSCardBody;
