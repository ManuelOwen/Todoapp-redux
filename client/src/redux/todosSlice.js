import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiDomain } from "../utils/utils";

// Async thunk for fetching todos
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState(); // Retrieve the user state
      const response = await axios.get(`${apiDomain}/todos`, {
        headers: { Authorization: `${user.userInfo.token}` }, // Access the token from the user state
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for creating a todo
export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (data, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState(); // Retrieve the user state
      const response = await axios.post(`${apiDomain}/todos`, data, {
        headers: { Authorization: `${user.userInfo.token}` }, // Access the token from the user state
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for updating a todo
export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, description }, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState(); // Retrieve the user state
      const response = await axios.put(
        `${apiDomain}/todo/${id}`,
        { description },
        { headers: { Authorization: `${user.userInfo.token}` } } // Access the token from the user state
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for deleting a todo
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState(); // Retrieve the user state
      const response = await axios.delete(`${apiDomain}/todo/${id}`, {
        headers: { Authorization: `${user.userInfo.token}` }, // Access the token from the user state
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.push(action.payload);
    });

    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const { id, description } = action.payload;
      const todoIndex = state.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state[todoIndex].description = description;
      }
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    });
  },
});

export default todosSlice.reducer;
