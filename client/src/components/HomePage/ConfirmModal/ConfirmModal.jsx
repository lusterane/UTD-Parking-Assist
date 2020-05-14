import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ConfirmModal(props) {
	return (
		<>
			<Modal show={props.showModal} onHide={props.onModalClose} animation={false}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>You have a {props.color} permit?</Modal.Body>
				<Modal.Footer>
					<Link to="/parkinginfopage">
						<Button variant="primary" classonClick={props.onModalConfirm}>
							Yes
						</Button>
					</Link>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ConfirmModal;
