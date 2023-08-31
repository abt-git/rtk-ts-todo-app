import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "uuid/v4";

type Todo = {
  id: string;
  message: string;
  completed: boolean;
};

type TodoState = {
  list: Todo[];
};

const initialState: TodoState = {
  list: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: uuid(),
        message: action.payload,
        completed: false
      });
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    sort(state) {
      state.list.sort((a, b) => a.message.localeCompare(b.message));
    }
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = todoSlice;
// Extract and export each action creator by name
export const { addTodo, toggleComplete, removeTodo } = actions;
// Export the reducer, either as a default or named export
export default reducer;
