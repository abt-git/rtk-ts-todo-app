import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { addTodo } from "../store/todoSlice";

const TodoInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className="todoInput"
      onSubmit={(event) => {
        event.preventDefault();
        if (inputValue.trim().length) {
          dispatch(addTodo(inputValue));
          setInputValue("");
        }
      }}
    >
      <label htmlFor="todo-input">Enter Todo Here</label>
      <input
        id="todo-input"
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;
