import React from "react";
import {
	Paper,
	Table,
	TableHead,
	TableRow,
	TableBody,
	Checkbox
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { useStyles, StyledTableCell, StyledTableRow } from "./StyledTable";
import ModalDeleteTask from "./ModalDeleteTask";
import ModalUpdateTask from "./ModalUpdateTask";

const TableList = ({
	tasks,
	dispatch,
	displayDeleteModal,
	displayUpdateModal,
	nameTask
}) => {
	const classes = useStyles();

	return (
		<>
			<Paper className={classes.container}>
				<Table aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>completed</StyledTableCell>
							<StyledTableCell>name</StyledTableCell>
							<StyledTableCell></StyledTableCell>
							<StyledTableCell></StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{tasks?.map((s) => {
							return (
								<StyledTableRow key={s.id}>
									<StyledTableCell>
										<Checkbox
											checked={s.completed}
											onChange={() => {
												dispatch({ type: "mark_completed", payload: s.id });
											}}
										/>
									</StyledTableCell>
									<StyledTableCell>
										{s.completed === false ? (
											s.text
										) : (
											<del className={classes.completedTask}>{s.text}</del>
										)}
									</StyledTableCell>
									<StyledTableCell>
										<IconButton
											onClick={() => {
												dispatch({ type: "open_modal", payload: true });
												dispatch({ type: "get_task_id", payload: s.id });
											}}
										>
											<DeleteIcon />
										</IconButton>
									</StyledTableCell>
									<StyledTableCell>
										<IconButton
											onClick={() => {
												dispatch({ type: "get_task_name", payload: { ...s } });
												dispatch({ type: "open_modal_update", payload: true });
											}}
										>
											<EditIcon />
										</IconButton>
									</StyledTableCell>
								</StyledTableRow>
							);
						})}
					</TableBody>
				</Table>
				<ModalDeleteTask
					open={displayDeleteModal}
					close={() => dispatch({ type: "open_modal", payload: false })}
					deleteTask={() => dispatch({ type: "delete_task" })}
				/>
				<ModalUpdateTask
					open={displayUpdateModal}
					close={() => dispatch({ type: "open_modal_update", payload: false })}
					updateTask={() => dispatch({ type: "update_task" })}
					value={nameTask}
					dispatch={dispatch}
				/>
			</Paper>
		</>
	);
};

export default TableList;
