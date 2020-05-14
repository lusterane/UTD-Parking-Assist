import React from "react";
import { Modal, Button, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ConfirmModal.css";

function ConfirmModal(props) {
	return (
		<>
			<Modal
				centered={true}
				show={props.showModal}
				onHide={props.onModalClose}
				animation={true}
			>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<div className="modal-body-text">
						You have {props.color === "orange" ? "an" : "a"} {props.color} permit?
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Link to="/parkinginfopage">
						<Button
							variant="primary"
							className={props.color + "-button confirm-button"}
							onClick={props.onModalConfirm}
						>
							<i class="fas fa-check fa-sm"></i>
						</Button>
					</Link>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ConfirmModal;
