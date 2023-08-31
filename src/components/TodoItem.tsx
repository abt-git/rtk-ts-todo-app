import React from "react";
import { useAppDispatch } from "../hooks";
import { toggleComplete, removeTodo } from "../store/todoSlice";

interface TodoItemProps {
  id: string;
  message: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, message, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="todo-item" style={{ display: "flex" }}>
      <input
        className="todoCheck"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span className="todoMessage">{message}</span>
      <button
        style={{ float: "right" }}
        type="button"
        className="todoDelete"
        onClick={() => dispatch(removeTodo(id))}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
