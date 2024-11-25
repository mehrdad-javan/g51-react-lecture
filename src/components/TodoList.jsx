import React, { useEffect, useState } from "react";
import { getTasksAPI, addTaskAPI } from "../service/TodoAPI";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  // State to stroe the task name
  const [inputValue, setInputValue] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [reload, setReload] = useState(false);

  //useEffect( ()=> {} , [] );
  useEffect(() => {
    console.log("fetch data from api executed!");
    const apiResponseData = getTasksAPI();
    setTasks(apiResponseData);
  }, [reload]);

  const clickHandler = () => {
    if (inputValue.trim() === "") {
      setErrorMessage("Task cannot be empty.");
      return;
    }
    if (inputValue.trim().length < 3) {
      setErrorMessage("Task must be at least 3 characters long.");
      return;
    }
    if (inputValue.trim().length > 50) {
      setErrorMessage("Task cannot exeed 50 chars.");
      return;
    }

    addTaskAPI(inputValue);
    setReload(!reload);
    
    setErrorMessage('');
    setInputValue('');
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">To-Do List</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="btn btn-primary" onClick={clickHandler}>
              Add Task
            </button>
          </div>
          {errorMessage && <div className="text-danger">{errorMessage}</div>}

          <ul className="list-group mt-3">
            {tasks.map((task, index) => (
              <li key={index} className="list-group-item">
                {task.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
