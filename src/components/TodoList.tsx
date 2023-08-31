import React from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import todoSlice from "../store/todos";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list);
  const dispatch = useAppDispatch();

  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          message={todo.message}
          completed={todo.completed}
        />
      ))}
      <button onClick={() => dispatch(todoSlice.actions.sort())}>
        Sort items
      </button>
    </div>
  );
};

export default TodoList;
