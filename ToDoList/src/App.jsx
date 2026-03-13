// import logo from "./logo.svg";
import "./App.css";
import TaskComp from "./components/TaskComp";
import { useState, useRef } from "react";
import todoimg from "./assets/logo.jpg";

function App() {
  const [editid, setEditid] = useState(null);
  const [Task, setTask] = useState("");
  const inputRef = useRef(null);
  const [ToDos, setToDos] = useState([]);
  const TaskList = ToDos.map((ToDo, index) => (
    <TaskComp
      ToDo={ToDo}
      key={ToDo.id}
      deleteT={deleteTask}
      checkT={checkTask}
      updateT={updateTask}
    />
  ));

  function inputHandler(event) {
    setTask(event.target.value);
  }
  function addTaskHandler() {
    const cleanedInput = Task.trim();
    if (cleanedInput === "") {
      alert("Task cannot be empty!");
      return;
    }

    const isDuplicate = ToDos.some(
      (todo) => todo.text.toLowerCase() === cleanedInput.toLowerCase(),
    );

    if (isDuplicate) {
      alert("This task already exists!");
      return;
    }

    if (editid) {
      setToDos(
        ToDos.map((todo) =>
          todo.id === editid ? { ...todo, text: Task } : todo,
        ),
      );
      setEditid(null);
      setTask("");
      return;
    }
// console.log("Hello");
    const newTask = { id: Date.now(), text: Task, checked: false };
    const nextToDos = [...ToDos, newTask];
    setToDos(nextToDos);
    setTask("");
  }
  function deleteTask(delid) {
    const newToDos = ToDos.filter((todo) => todo.id !== delid);
    setToDos(newToDos);
  }

  function checkTask(tid) {
    setToDos(
      ToDos.map((todo) =>
        todo.id === tid ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }
  function updateTask(todo) {
    setTask(todo.text);
    setEditid(todo.id);
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <div className="Appcontainer">
        <div className="header">
          <h1 className="heading">ToDoList</h1>
          <img src={todoimg} className="todologo" />
        </div>
        <div className="inputdiv">
          <input
            type="text"
            placeholder="Add your task"
            id="task"
            value={Task}
            onChange={inputHandler}
            ref={inputRef}
          />

          <button id="addtask" onClick={addTaskHandler}>
            {editid ? "Update" : "Add"}
          </button>
        </div>
        <div className="tasklist">{TaskList}</div>
      </div>
    </div>
  );
}

export default App;
