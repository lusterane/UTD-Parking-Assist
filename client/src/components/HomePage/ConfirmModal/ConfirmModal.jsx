import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ConfirmModal.css';
import '../../../styles/shared/Colors.css';

function ConfirmModal(props) {
	const { lightMode, showModal, onModalClose, onModalConfirm, color } = props;
	return (
		<div>
			<Modal centered={true} show={showModal} onHide={onModalClose} animation={true}>
				<Modal.Header
					className={lightMode ? '' : 'dark-mode dark-mode-close'}
					closeButton
				></Modal.Header>
				<Modal.Body className={lightMode ? '' : 'dark-mode'}>
					<div className='modal-body-text'>
						You have {color === 'orange' ? 'an' : 'a'} {color} permit?
					</div>
				</Modal.Body>
				<Modal.Footer className={lightMode ? '' : 'dark-mode'}>
					<Link to={process.env.PUBLIC_URL + '/parkingInfoPage'}>
						<Button
							variant='primary'
							className={color + '-button confirm-button'}
							onClick={onModalConfirm}
						>
							<i className='fas fa-check fa-sm'></i>
						</Button>
					</Link>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default ConfirmModal;
