import React, { useReducer, createContext } from "react";
const initialState = {
	tasks: [{ id: "1", text: "add iamge", completed: false }],
	newTask: "",
	displayModalDelete: false,
	taskId: ""
};
function appReducer(state = initialState, action) {
	switch (action.type) {
		case "reset":
			return {
				...state,
				tasks: action.payload
			};
		case "add":
			return {
				...state,
				tasks: [...state.tasks, action.payload.task],
				newTask: action.payload.newTask
			};
		case "handle_new_task":
			console.log(action.payload);
			return {
				...state,
				newTask: action.payload
			};
		case "mark_completed":
			return {
				...state,
				tasks: state.tasks.map((t) => {
					if (t.id === action.payload) {
						return {
							...t,
							completed: !t.completed
						};
					}
					return t;
				})
			};
		case "open_modal":
			return {
				...state,
				displayDeleteModal: action.payload
			};
		case "get_task_id":
			return {
				...state,
				taskId: action.payload
			};
		case "delete_task":
			return {
				...state,
				tasks: state.tasks.filter((t) => t.id !== state.taskId)
			};
		default:
			return state;
	}
}
export const ListContext = createContext({});

export const ListProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState);
	return (
		<ListContext.Provider value={{ state, dispatch }}>
			{children}
		</ListContext.Provider>
	);
};