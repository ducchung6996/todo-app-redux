import FiltersReducer from "../Filters/FiltersSlice";
import TodoReducer from "../TodoList/TodoSlice";
import { combineReducers } from "redux";

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: FiltersReducer(state.filters, action),
//         todoList: TodoReducer(state.todoList, action),
//     }
// };

const rootReducer = combineReducers({
    filters: FiltersReducer,
    todoList: TodoReducer
})

export default rootReducer;