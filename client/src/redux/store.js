import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import todosReducer from "./todosSlice";
import uiReducer from "./uiSlice";

const rootReducer = combineReducers({
  user: userReducer,
  todos: todosReducer,
  ui: uiReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
