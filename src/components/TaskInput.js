import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

export default function TaskInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      margin: "20px 0",
    },
    input: {
      flex: 1,
      padding: "10px 15px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      outline: "none",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      transition: "border 0.2s ease",
    },
    button: {
      padding: "10px 20px",
      background: "#2196f3",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      transition: "background 0.2s ease",
    },
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
        style={styles.input}
        onFocus={(e) => (e.target.style.border = "1px solid #2196f3")}
        onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
      />
      <button
        style={styles.button}
        onClick={handleAdd}
        onMouseOver={(e) => (e.target.style.background = "#1976d2")}
        onMouseOut={(e) => (e.target.style.background = "#2196f3")}
      >
        Add Task
      </button>
    </div>
  );
}
