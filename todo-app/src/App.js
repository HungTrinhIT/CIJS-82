import { useState } from "react";
import "./App.css";
import TodoForm from "./components/AddTodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todoList, setTodoList] = useState();

  const onAddNewTodo = () => {
    // Xử lý thêm new todo vào todoList từ todoForm
  };
  return (
    <div className="container">
      <TodoForm onAddNewTodo={onAddNewTodo} />
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
