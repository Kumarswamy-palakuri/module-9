export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const addTask = (text) => ({ type: ADD_TASK, payload: text });
export const toggleTask = (id) => ({ type: TOGGLE_TASK, payload: id });
export const removeTask = (id) => ({ type: REMOVE_TASK, payload: id });