import React, { useReducer, createContext } from "react";
const initialState = {
	tasks: [{ id: "1", text: "add iamge", completed: false }],
	newTask: "",
	displayDeleteModal: false,
	displayUpdateModal: false,
	taskId: "",
	task: {},
	renameTask: "",
	errors: {}
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
		case "open_modal_update":
			return {
				...state,
				displayUpdateModal: action.payload
			};
		case "get_task_name":
			return {
				...state,
				task: action.payload
			};
		case "rename_name_task":
			return {
				...state,
				renameTask: action.payload
			};
		case "update_task":
			return {
				...state,
				tasks: state.tasks.map((t) => {
					if (t.id === state.task.id) {
						return {
							...t,
							text: state.renameTask
						};
					}
					return t;
				})
			};
		case "get_errors_form":
			console.log(action.payload);
			return {
				...state,
				errors: action.payload
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
