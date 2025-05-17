import React from "react";
import "./Task.css";

const Task = (props) => {
  const completed = 'Complete'
  return (
    <span className="Task">
      <div className="task_info">
        <div className="task_title">{props.title}</div>
        <div className="task_desc">{props.desc}</div>
      </div>
      <div className="task_interact">
        <button>{completed}</button>
        <button>Delete</button>
      </div>
    </span>
  );
};

export default Task;
