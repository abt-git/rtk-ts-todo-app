import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
