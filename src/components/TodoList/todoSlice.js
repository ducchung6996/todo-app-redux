// const initState = [
// { id: 1, name: "Learn HTML", completed: false, priority: "Low" },
// { id: 2, name: "Learn CSS", completed: true, priority: "Medium" },
// { id: 3, name: "Learn JS", completed: false, priority: "High" },
// ];

// const todoReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoReducer;

import { createSlice } from "@reduxjs/toolkit";
import TodoList from ".";

export const todoSlice = createSlice({
  name: TodoList,
  initialState: [
    { id: 1, name: "Learn HTML", completed: false, priority: "Low" },
    { id: 2, name: "Learn CSS", completed: true, priority: "Medium" },
    { id: 3, name: "Learn JS", completed: false, priority: "High" },
  ],
  reducers: {
    addTodo: (state, action) => {
      //IMMER
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
