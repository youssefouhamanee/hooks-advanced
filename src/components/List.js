import React, { useContext, useEffect } from "react";
import { ListContext } from "./contextApp";
import { Button, TextField, Typography } from "@material-ui/core";
import TableList from "./Table";
import { v4 as uuid } from "uuid";
import { useEffechtOnce } from "./helpers";

const List = () => {
	const { state, dispatch } = useContext(ListContext);

	useEffechtOnce(() => {
		const raw = localStorage.getItem("data");
		dispatch({ type: "reset", payload: JSON.parse(raw) });
	});

	useEffect(() => {
		localStorage.setItem("data", JSON.stringify(state.tasks));
	}, [state]);

	const totalTasksCompleted = state.tasks.filter((t) => t.completed !== false);

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "50%"
				}}
			>
				<TextField
					id="standard-basic"
					label="Name of task"
					onChange={(e) =>
						dispatch({ type: "handle_new_task", payload: e.target.value })
					}
					value={state.newTask}
				/>

				<Button
					variant="outlined"
					color="primary"
					onClick={() =>
						dispatch({
							type: "add",
							payload: {
								task: { id: uuid(), text: state.newTask, completed: false },
								newTask: ""
							}
						})
					}
				>
					ADD TASK
				</Button>
			</div>

			<br />
			<br />
			{totalTasksCompleted.length > 0 && (
				<Typography>
					Tasks completed : ({totalTasksCompleted.length})
				</Typography>
			)}

			<TableList
				tasks={state?.tasks}
				dispatch={dispatch}
				displayDeleteModal={state?.displayDeleteModal}
				displayUpdateModal={state?.displayUpdateModal}
				nameTask={state.task.text}
			/>
		</>
	);
};
export default List;
