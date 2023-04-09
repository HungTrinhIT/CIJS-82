import React from "react";

const TodoList = (props) => {
  const { todos } = props;
  return (
    <div>
      {todos &&
        todos.map((todoItem) => {
          return (
            <div className="d-flex align-items-center gap-2" key={todoItem.id}>
              <input type="checkbox" checked={todoItem.isCompleted} />
              <p className="mb-0 me-4">{todoItem.title}</p>
              <button className="rounded-circle btn btn-danger">X</button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
