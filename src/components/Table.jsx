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
import { useStyles, StyledTableCell, StyledTableRow } from "./StyledTable";
import ModalDeleteTask from "./ModalDeleteTask";

const TableList = ({ tasks, dispatch, displayDeleteModal }) => {
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
			</Paper>
		</>
	);
};

export default TableList;
