import { useState } from "react";

const initialState = {
  age: 37,
  name: "Cristiano Ronaldo",
};
const TodoApp = () => {
  const [person, setPerson] = useState(initialState);

  const onIncreaseAge = () => {
    // console.log("Im a in onIncreaseAge function");
    // person.age = person.age + 1;

    const nextPerson = {
      ...person,
      age: person.age + 1,
    };
    setPerson(nextPerson);
  };

  // prevState => A
  // nextState => A
  // compare prevState <> nextState => shallow comparison  => false => UI does not re-render
  //                                => shallow comparison  => true => UI re-render

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
    </div>
  );
};

export default TodoApp;
