import { createSelector } from "@reduxjs/toolkit";

const todoListSelector = (state) => state.todoList;
const filterStatusSelector = (state) => state.filters.status;
const filterPrioritiesSelector = (state) => state.filters.priority;
const searchTextSelector = (state) => state.filters.search;

// export const todoListSelector = (state) => {
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filters.search);
//     });
//     return todoRemaining;
// };

export const remainingTodoList = createSelector(
  todoListSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  searchTextSelector,
  (todoList, status, priority, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
