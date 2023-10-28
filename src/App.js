import "./App.css";
import { useState } from "react";
import { Task } from "./Task";
function App() {
  const [todoList, setTodoList] = useState(() => {
    const storedTodoList = localStorage.getItem("todoList");
    return storedTodoList ? JSON.parse(storedTodoList) : [];
  }, []);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      // we created a new object
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completeStatus: false,
    };

    const updatedTodoList = [...todoList, task];
    setTodoList(updatedTodoList);

    setNewTask("");

    // Save updated todoList to localStorage
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
  };

  const deleteTask = (id) => {
    const newToDoList = todoList.filter((task) => {
      if (task.id === id) {
        return false;
      } else {
        return true;
      }
    });

    setTodoList(newToDoList);
    localStorage.setItem("todoList", JSON.stringify(newToDoList));
    /*  orsimply 
      return(
        task.id !== taskName.id 
      )   
    */
  };

  const updateTask = (id) => {
    const newUpdatedList = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, completeStatus: true };
      } else {
        return task;
      }
    });
    setTodoList(newUpdatedList);
    localStorage.setItem("todoList", JSON.stringify(newUpdatedList));
  };
  function checkIfEnterPressed(event) {
    if (event.keyCode === 13) {
      // 13 is the keyCode for enter key
      addTask();
    }
  }

  return (
    <div className="App">
      <h1 className="heading">Get Things Done !</h1>
      <div className="addTask">
        <input
          onChange={handleChange}
          onKeyDown={checkIfEnterPressed}
          value={newTask}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="alltasks">
        <div className="listOfTask">
          {todoList.map((todo) => {
            return (
              <Task
                taskName={todo.taskName}
                id={todo.id}
                completeStatus={todo.completeStatus}
                deleteTask={deleteTask}
                updateTask={updateTask}
                className={`Task${todo.completeStatus ? " completed" : ""}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
