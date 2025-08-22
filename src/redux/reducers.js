import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from "./actions";

let idCounter = 1;
const initialState = { tasks: [] };

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: idCounter++, text: action.payload, completed: false }]
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        )
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.payload)
      };
    default:
      return state;
  }
}
