export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task
});

export const toggleTask = (id) => ({
  type: "TOGGLE_TASK",
  payload: id
});

export const removeTask = (id) => ({
  type: "REMOVE_TASK",
  payload: id
});