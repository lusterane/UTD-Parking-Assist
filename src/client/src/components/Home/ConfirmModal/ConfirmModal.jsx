import React from "react";
import { Modal, Button } from "react-bootstrap";

function ConfirmModal(props) {
	return (
		<>
			<Modal show={props.showModal} onHide={props.onModalClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>{props.color} Permit</Modal.Title>
				</Modal.Header>
				<Modal.Body>Do you have a {props.color} permit?</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={props.onModalConfirm}>
						Yes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ConfirmModal;
