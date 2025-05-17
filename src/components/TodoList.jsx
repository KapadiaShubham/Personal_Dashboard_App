import React, { useState, useEffect } from "react";
import "./TodoList.css";
import Task from "./Task";

const TodoList = () => {
  const [newTask, setNewTask] = useState({
    title: "",
    desc: "",
  });
  const [tasks, setTasks] = useState([
    {
      key: 3,
      title: "Title 3",
      desc: "Desc 3",
    },
    {
      key: 2,
      title: "Title 2",
      desc: "Desc 2",
    },
    {
      key: 1,
      title: "Title 1",
      desc: "Desc 1",
    }
  ]);
  useEffect(() => {
    console.log(newTask);
  }, [newTask]);
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const taskList = () => {
    return tasks.map((item) => {
      return <Task key={item.key} title={item.title} desc={item.desc} />;
    });
  };

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!newTask.title.trim() && !newTask.desc.trim()) return;

      setTasks([
        {
          key: tasks.length + 1,
          title: newTask.title,
          desc: newTask.desc,
        },
        ...tasks,
      ]);
      setNewTask({ title: "", desc: "" });
    }
  };

  return (
    <div className="todoList">
      Tasks
      <div className="newTask">
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Title"
        />
        <input
          type="text"
          name="desc"
          value={newTask.desc}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="New Task..."
        />

        <button
          onClick={() => {
            if (!newTask.title.trim() && !newTask.desc.trim()) return;

            setTasks([
              {
                key: tasks.length + 1,
                title: newTask.title.trim(),
                desc: newTask.desc.trim(),
              },
              ...tasks,
            ]);
            setNewTask({ title: "", desc: "" });
          }}
        >
          Create
        </button>
      </div>
      <div className="tasks">{taskList()}</div>
    </div>
  );
};

export default TodoList;
