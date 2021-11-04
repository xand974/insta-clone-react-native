import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    pending: false,
    error: false,
    currentUserPosts: [],
  },
  reducers: {
    getPostsStart: (state) => {
      state.pending = true;
    },
    getPostsSuccess: (state, action) => {
      state.pending = false;
      state.posts = action.payload;
    },
    getPostsFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    createPostsStart: (state) => {
      state.pending = true;
    },
    createPostsSuccess: (state, action) => {
      state.pending = false;
      state.posts.push(action.payload);
    },
    createPostsFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    getCurrentUserPostStart: (state) => {
      state.pending = true;
    },
    getCurrentUserPostSuccess: (state, action) => {
      state.pending = false;
      state.currentUserPosts = action.payload;
    },
    getCurrentUserPostFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default postSlice.reducer;
export const {
  getPostsStart,
  getPostsSuccess,
  getPostsFailure,
  createPostsFailure,
  createPostsStart,
  createPostsSuccess,
  getCurrentUserPostFailure,
  getCurrentUserPostStart,
  getCurrentUserPostSuccess,
} = postSlice.actions;
