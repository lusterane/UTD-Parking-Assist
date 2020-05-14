import React, { Component } from "react";

import "./Footer.css";

class Footer extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="footer">
					<p>
						Made with <i class="fas fa-heart"></i> by{" "}
						<a href="https://github.com/lusterane" target="_blank">
							Toby
						</a>
						.
					</p>
				</div>
			</React.Fragment>
		);
	}
}

export default Footer;
