import "./styles.css";
import { useState } from "react";

export default function App() {
  var newTask = "";

  const [taskList, setTaskList] = useState([]);

  //*********/Add task bar start *******//
  const AddTaskBar = () => {
    function newTaskUpdate(event) {
      newTask = event.target.value;
    }

    function updateTaskList() {
      setTaskList([...taskList, newTask]);
    }

    return (
      <div className="todo">
        <div className="todo_addtask">
          <div className="todo_addtask_text">ADD A TASK</div>
          <div className="todo_addtask_input">
            <input
              onChange={newTaskUpdate}
              className="input"
              placeholder="Eg: Buy Groceries"
            ></input>
            <button onClick={updateTaskList} className="addtask_button">
              +Add Task
            </button>
          </div>
        </div>
      </div>
    );
  };
  //********Add task bar ends********/

  //***Template for displaying each task*****/
  const EachTaskDiv = (props) => {
    if (!props.value) return null;
    return (
      <li className="list_item">
        <input className="checkStrike" type="checkbox" />
        <span className="list_item_text">{props.value}</span>
        <img
          alt="Delete-icon"
          className="dustbin"
          src="https://img.icons8.com/android/16/000000/delete.png"
        />
      </li>
    );
  };

  //****Displays task list********/
  const Task = () => {
    return (
      <div class="todo_tasklist">
        <ul class="list">
          {taskList.map((item) => (
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
