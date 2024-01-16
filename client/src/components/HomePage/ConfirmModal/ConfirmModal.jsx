import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ConfirmModal.css';
import '../../../styles/shared/Colors.css';

function ConfirmModal(props) {
	const { showModal, onModalClose, onModalConfirm, color } = props;
	const getColor = () => {
		if (color == 'payBySpace') {
			return 'Pay By Space';
		}
		return color;
	};
	return (
		<div>
			<Modal centered={true} show={showModal} onHide={onModalClose} animation={true}>
				<Modal.Header className="dark-mode dark-mode-close" closeButton></Modal.Header>
				<Modal.Body className="dark-mode">
					<div className="modal-body-text">
						You have {color === 'orange' ? 'an' : 'a'} {getColor()} permit?
					</div>
				</Modal.Body>
				<Modal.Footer className="dark-mode">
					<Link to={process.env.PUBLIC_URL + '/parkingInfoPage'}>
						<Button
							variant="primary"
							className={color + '-button confirm-button'}
							onClick={onModalConfirm}
						>
							<i className="fas fa-check fa-sm"></i>
						</Button>
					</Link>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default ConfirmModal;
