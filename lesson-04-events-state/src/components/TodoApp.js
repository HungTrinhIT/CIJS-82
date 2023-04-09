import { useState } from "react";

const initialState = {
  age: 37,
  name: "Cristiano Ronaldo",
};

/*
  todo {
    id: ""
    title: "Learn React",
    isCompleted: false
  }
*/

const TodoApp = () => {
  const [person, setPerson] = useState(initialState);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Learn Angular",
      isCompleted: false,
    },
  ]);

  const onIncreaseAge = () => {
    // console.log("Im a in onIncreaseAge function");
    // person.age = person.age + 1;
    // setPerson(person);

    const nextPerson = {
      ...person,
      age: person.age + 1,
    };
    setPerson(nextPerson);
  };

  // prevState => A
  // nextState => A
  // compare prevState <> nextState => (shallow comparison)  => false => UI does not re-render
  //                                => shallow comparison  => true => UI re-render

  // Clean up
  // Best practices
  // Cập nhật state dạng array
  const onAddTodo = () => {
    const currentLength = todos.length;
    const newTodo = {
      title: `Learn ReactJS ${currentLength + 1}`,
      isCompleted: false,
      id: currentLength + 1,
    };

    const nextTodos = [...todos, newTodo];

    setTodos(nextTodos);
  };

  // BTVN: Implement function delete todo
  // Filter, for,...
  const onDeleteTodo = () => {};
  return (
    <div
      style={{
        marginTop: "60px",
        padding: "0 60px",
      }}
    >
      <h1>Thao tác state với kiểu dữ liệu references: object, array</h1>
      <div className="todo-author">
        <h6>
          <strong>Name:</strong> {person.name}
        </h6>
        <p>
          <strong>Age:</strong> {person.age}
        </p>
        <button onClick={onIncreaseAge}>Tăng tuổi ông {person.name}</button>
      </div>
      <button onClick={onAddTodo}>Add new todo</button>
      <div className="todo-list">
        {todos.map((todoItem) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <h4>{todoItem.title}</h4>
              <button onClick={onDeleteTodo}>Delete Item</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;

// Homework
/*
  - Landing page ?
  - On Delete Item ?
  - Answer all questions on Notion file ?
*/
