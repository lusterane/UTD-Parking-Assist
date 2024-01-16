import React from 'react';
import { Button } from 'reactstrap';
import './ColorOptionStyle.css';
import '../../../styles/shared/Colors.css';

const ColorOption = (props) => {
	const { color, onClick, handleMouseOver, handleMouseLeave, colorBlindMode } = props;

	const getClassName = () => {
		if (colorBlindMode) {
			return `${color}-color-background color-option round-corners pointer border-${color} color-blind`;
		}
		return `${color}-color-background color-option round-corners pointer border-${color}`;
	};

	const getPermitName = () => {
		if (color == 'payBySpace') {
			return 'Pay By Space';
		}
		return color.charAt(0).toUpperCase() + color.slice(1) + ' Permit';
	};

	return (
		<React.Fragment>
			<Button
				outline
				color="secondary"
				onClick={() => {
					onClick(color);
				}}
				onMouseOver={() => {
					handleMouseOver(color);
				}}
				onMouseLeave={() => {
					handleMouseLeave();
				}}
				className={getClassName()}
			>
				{getPermitName()}
			</Button>
		</React.Fragment>
	);
};

export default ColorOption;
