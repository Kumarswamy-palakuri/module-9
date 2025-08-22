import { EventEmitter } from "events";

let tasks = [];
let idCounter = 1;

class TaskStore extends EventEmitter {
  getTasks() {
    return tasks;
  }

  handleActions(action) {
    switch (action.type) {
      case "ADD_TASK":
        tasks.push({ id: idCounter++, text: action.payload, completed: false });
        this.emit("change");
        break;
      case "TOGGLE_TASK":
        tasks = tasks.map(t => t.id === action.payload ? { ...t, completed: !t.completed } : t);
        this.emit("change");
        break;
      case "REMOVE_TASK":
        tasks = tasks.filter(t => t.id !== action.payload);
        this.emit("change");
        break;
      default:
    }
  }
}

const taskStore = new TaskStore();
export default taskStore;