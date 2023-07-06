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
