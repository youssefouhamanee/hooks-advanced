import React from "react";
import { Button, Modal, TextField } from "@material-ui/core";
import { classesModal } from "./StyledTable";
const ModalUpdateTask = ({ open, close, dispatch, value, updateTask }) => {
	const classes = classesModal();
	console.log(value);
	return (
		<Modal open={open} onClose={close} aria-labelledby="simple-modal-title">
			<div className={classes.paper}>
				<div>
					<p id="simple-modal-title">Update task</p>
				</div>
				<div className={classes.contentUpdate}>
					<div>
						<TextField
							id="standard-basic"
							label="Name of task"
							defaultValue={value}
							onChange={(e) => {
								dispatch({ type: "rename_name_task", payload: e.target.value });
							}}
						/>
					</div>

					<div className={classes.root}>
						<Button variant="contained" color="default" onClick={() => close()}>
							Cancel
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={() => {
								updateTask();
								close();
							}}
						>
							Save
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default ModalUpdateTask;
