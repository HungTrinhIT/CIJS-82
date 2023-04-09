import { useState } from "react";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const onChangeHandler = (e) => setTitle(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddNewTodo(title);
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          name="title"
          value={title}
          onChange={onChangeHandler}
          placeholder="I will do this *"
        />
        <button type="submit">+ Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
