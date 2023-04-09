import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/AddTodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const onAddNewTodo = (todoTitle) => {
    // Step 1: Create new todoItem
    const newTodo = {
      title: todoTitle,
      isCompleted: false,
      id: uuidv4(),
    };

    // Step: Next todolist
    const nextTodoList = [...todoList, newTodo];

    // Step 3: Set new state for todolist
    setTodoList(nextTodoList);
  };

  // Cập nhật trạng thái hoàn thành
  const onTodoMarkComplete = (todoId) => {};

  // Delete todoitem
  const onDeleteTodo = (todoId) => {};

  return (
    <div className="container">
      <TodoForm onAddNewTodo={onAddNewTodo} />
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
