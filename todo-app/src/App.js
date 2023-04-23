import { useEffect, useState } from "react";
import { v4 } from "uuid";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  // State and hooks
  const [todolist, setTodoList] = useState([]);

  useEffect(() => {
    const todoFromLocal = localStorage.getItem("todos");
    if (todoFromLocal) {
      setTodoList(JSON.parse(todoFromLocal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]);

  //   Functions
  const onAddTodo = (title) => {
    const newTodo = {
      id: v4(),
      title,
      isDone: false,
    };
    setTodoList((prevList) => [newTodo, ...prevList]);
  };

  const onItemChecked = (itemId) => {
    const itemIndex = todolist.findIndex(({ id }) => id === itemId);
    const newTodo = [...todolist];
    const newTodoItem = {
      ...newTodo[itemIndex],
      isDone: !newTodo[itemIndex].isDone,
    };
    newTodo[itemIndex] = newTodoItem;
    setTodoList(newTodo);
  };

  const onItemRemoved = (itemId) => {
    const newTodo = todolist.filter((item) => item.id !== itemId);
    setTodoList(newTodo);
  };

  const onUpdateTodoItem = (newValue, todoId) => {
    const updatingTodoItemIndex = todolist.findIndex(
      (todo) => todo.id === todoId
    );

    const nextTodoList = [...todolist];
    // nextTodoList[updatingTodoItemIndex].title = newValue;
    nextTodoList[updatingTodoItemIndex] = {
      ...nextTodoList[updatingTodoItemIndex],
      title: newValue,
    };

    setTodoList(nextTodoList);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen transition-all ">
      <div className="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
        {/* Component Start */}
        <div className="max-w-full  my-[40px] px-7 pt-10 py-10 bg-white rounded-lg shadow-lg w-2/3 h-screen">
          <Header appName={"Todo list"} />
          <TodoForm onAddTodo={onAddTodo} />
          <TodoList
            todoList={todolist}
            onItemChecked={onItemChecked}
            onItemRemoved={onItemRemoved}
            onUpdateTodoItem={onUpdateTodoItem}
          />
        </div>
        {/* Component End  */}
      </div>
    </div>
  );
}

export default App;
