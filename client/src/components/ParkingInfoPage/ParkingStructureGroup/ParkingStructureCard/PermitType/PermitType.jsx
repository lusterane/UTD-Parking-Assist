import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

import "../../../../ColorOption/Colors.css";

class PermitType extends Component {
	state = {
		expanded: false,
	};

	handleClickExpand = () => {
		this.setState({ expanded: !this.state.expanded });
	};

	render() {
		const { color, textStyle } = this.props;
		const styles = color + "-background " + textStyle;

		const data = this.state.expanded ? (
			<span>
				<span>Level: 2 | Spots: 152</span>
				<br></br>
				<span>Level: 3 | Spots: 49</span>
			</span>
		) : (
			<span>201 spots</span>
		);

		return this.state.expanded ? (
			<ListGroup.Item
				style={{ cursor: "pointer" }}
				onClick={this.handleClickExpand}
				className={styles}
			>
				<i style={{ float: "right" }} className="fas fa-sort-up"></i>

				{data}
			</ListGroup.Item>
		) : (
			<ListGroup.Item
				style={{ cursor: "pointer" }}
				onClick={this.handleClickExpand}
				className={styles}
			>
				{data}
				<i style={{ float: "right" }} className="fas fa-sort-down"></i>
			</ListGroup.Item>
		);
	}
}

export default PermitType;
