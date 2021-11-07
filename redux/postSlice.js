import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    pending: false,
    error: false,
    currentUserPosts: [],
    creator: null,
    comments: [],
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
    getCreatorStart: (state) => {
      state.pending = true;
    },
    getCreatorSuccess: (state, action) => {
      state.pending = false;
      state.creator = action.payload;
    },
    getCreatorFailure: (state) => {
      state.pending = false;
      state.error = true;
    },

    getCommentsStart: (state) => {
      state.pending = true;
    },
    getCommentsSuccess: (state, action) => {
      state.pending = false;
      state.comments = action.payload;
    },
    getCommentsFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    setCommentsStart: (state) => {
      state.pending = true;
    },
    setCommentsSuccess: (state, action) => {
      state.pending = false;
      state.comments.push(action.payload);
    },
    setCommentsFailure: (state) => {
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
  getCreatorFailure,
  getCreatorStart,
  getCreatorSuccess,
  getCommentsFailure,
  getCommentsStart,
  getCommentsSuccess,
  setCommentsFailure,
  setCommentsStart,
  setCommentsSuccess,
} = postSlice.actions;
