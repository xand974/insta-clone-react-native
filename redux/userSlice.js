import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    pending: false,
    error: false,
  },
  reducers: {
    getUsersStart: (state) => {
      state.pending = true;
    },
    getUsersSuccess: (state, action) => {
      state.pending = false;
      state.users = action.payload;
    },
    getUsersFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    resetUsers: (state) => {
      state.users = [];
    },
  },
});

export default userSlice.reducer;
export const { getUsersStart, getUsersSuccess, getUsersFailure, resetUsers } =
  userSlice.actions;
