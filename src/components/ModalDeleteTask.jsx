import React from "react";
import { Modal, Button } from "@material-ui/core";
import { classesModal } from "./StyledTable";
const ModalDeleteTask = ({ open, close, deleteTask }) => {
	const classes = classesModal();
	return (
		<>
			<Modal
				open={open}
				onClose={close}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<div className={classes.paper}>
					<h2 id="simple-modal-title">Warning !</h2>
					<p id="simple-modal-description">do you want delete this task ?</p>
					<div className={classes.root}>
						<Button variant="contained" color="default" onClick={() => close()}>
							CANCEL
						</Button>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => {
								deleteTask();
								close();
							}}
						>
							REMOVE
						</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default ModalDeleteTask;
