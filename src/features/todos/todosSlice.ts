import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "./todo";

export interface TodoState {
  todos: Array<Todo>;
}

const initialState: TodoState = {
  todos: [
    {
      id: "1",
      title: "Learn Redux",
      completed: true,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
