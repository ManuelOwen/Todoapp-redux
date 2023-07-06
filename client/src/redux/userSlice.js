import { createSlice } from "@reduxjs/toolkit";

const storedUserInfo = localStorage.getItem("userInfo");
let parsedUserInfo;

try {
  parsedUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {};
} catch (error) {
  console.error("Error parsing userInfo from local storage:", error);
  parsedUserInfo = {};
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: parsedUserInfo.isAuthenticated || false,
    userInfo: parsedUserInfo.userInfo || null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
      state.error = null;

      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    loginFailure: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      state.error = "Invalid credentials";
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      state.error = null;

      localStorage.removeItem("userInfo");
    },
  },
});

export const { loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
