import "./styles.css";
import { useState } from "react";

export default function App() {
  var newTask = "";

  const [taskList, setTaskList] = useState({});

  //*********/Add task bar start *******//
  const AddTaskBar = () => {
    function newTaskUpdate(event) {
      newTask = event.target.value;
    }

    function updateTaskList() {
      if (newTask === "") return;
      setTaskList({ ...taskList, [newTask]: false });
    }
    const CheckIfEnter = (event) => {
      if (event.keyCode === 13) {
        updateTaskList();
      }
    };

    return (
      <div className="todo">
        <div className="todo_addtask">
          <div className="todo_addtask_text">ADD A TASK</div>
          <div className="todo_addtask_input">
            <input
              onChange={newTaskUpdate}
              onKeyUp={CheckIfEnter}
              className="input"
              placeholder="Eg: Buy Groceries"
            ></input>
            <button onClick={updateTaskList} className="addtask_button">
              + Add Task
            </button>
          </div>
        </div>
      </div>
    );
  };
  //********Add task bar ends********/

  //***Template for displaying each task*****/
  const EachTaskDiv = (props) => {
    const removeTaskHandler = (Taskname) => {
      let resultObj = {};
      for (key in taskList) {
        if (key === Taskname) {
        } else {
          resultObj[key] = taskList[key];
        }
        setTaskList(resultObj);
      }
    };
    if (!props.value) return null;
    return (
      <li className="list_item">
        <input
          className="checkStrike"
          checked={taskList[props.value]}
          type="checkbox"
          onClick={(event) => {
            const checkedValue = event.target.checked;
            setTaskList({ ...taskList, [props.value]: checkedValue });
          }}
        />
        <span
          className="list_item_text"
          style={{
            textDecoration: taskList[props.value] ? "line-through" : "none",
            color: taskList[props.value] ? "#00306080" : "black",
            fontSize: "20px"
          }}
        >
          {props.value}
        </span>
        <img
          alt="Delete-icon"
          onClick={() => removeTaskHandler(props.value)}
          className="dustbin"
          src="https://img.icons8.com/android/16/000000/delete.png"
        />
      </li>
    );
  };

  //****Displays task list********/
  const Task = () => {
    return (
      <div className="todo_tasklist">
        <ul className="list">
          {Object.keys(taskList).map((item) => (
            <EachTaskDiv value={item} />
          ))}
        </ul>
      </div>
    );
  };

  //******** */Main rendering*******/
  return (
    <div className="App">
      <AddTaskBar />
      <Task />
    </div>
  );
}
