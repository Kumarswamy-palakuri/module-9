import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../redux/actions";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const styles = {
    list: {
      listStyle: "none",
      padding: 0,
      margin: "20px 0",
      maxWidth: "400px",
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#f9f9f9",
      padding: "10px 15px",
      marginBottom: "10px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    text: (completed) => ({
      textDecoration: completed ? "line-through" : "none",
      color: completed ? "#999" : "#333",
      flex: 1,
      marginRight: "10px",
    }),
    button: {
      marginLeft: "5px",
      padding: "5px 10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
    toggleBtn: {
      background: "#4caf50",
      color: "white",
    },
    removeBtn: {
      background: "#f44336",
      color: "white",
    },
  };

  return (
    <ul style={styles.list}>
      {tasks.map((task) => (
        <li key={task.id} style={styles.listItem}>
          <span style={styles.text(task.completed)}>{task.text}</span>
          <div>
            <button
              style={{ ...styles.button, ...styles.toggleBtn }}
              onClick={() => dispatch(toggleTask(task.id))}
            >
              Toggle
            </button>
            <button
              style={{ ...styles.button, ...styles.removeBtn }}
              onClick={() => dispatch(removeTask(task.id))}
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
