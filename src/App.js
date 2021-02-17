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

export default function App() {
  return (
    <div className="App">
      <AddTaskBar />
    </div>
  );
}
