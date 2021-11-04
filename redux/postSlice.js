import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    userPosts: [],
    pending: false,
    error: false,
  },
  reducers: {
    getPostsStart: (state) => {
      state.pending = true;
    },
    getPostsSuccess: (state, action) => {
      state.pending = false;
      state.userPosts = action.payload;
    },
    getPostsFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default postSlice.reducer;
export const { getPostsStart, getPostsSuccess, getPostsFailure } =
  postSlice.actions;
