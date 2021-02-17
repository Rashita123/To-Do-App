import "./styles.css";

const AddTaskBar = () => {
  return (
    <div className="todo">
      <div className="todo_addtask">
        <div className="todo_addtask_text">ADD A TASK</div>
        <div className="todo_addtask_input">
          <input className="input" placeholder="Eg: Buy Groceries"></input>
          <button className="addtask_button">+Add Task</button>
        </div>
      </div>
    </div>
  );
};

const ToDoList = (props) => {
  return (
    <div className="todo_tasklist">
      <ul className="list">
        <li className="list_item">
          <input className="checkStrike" type="checkbox"></input>
          <span className="list_item_text">{props.value}</span>
          <img
            className="dustbin"
            src="https://img.icons8.com/android/16/000000/delete.png"
          />
        </li>
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <AddTaskBar />
      <ToDoList value="Read Books" />
      <ToDoList value="Buy Groceries" />
    </div>
  );
}
