import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import {
  createPostsFailure,
  createPostsStart,
  createPostsSuccess,
  getCommentsFailure,
  getCommentsStart,
  getCommentsSuccess,
  getCreatorFailure,
  getCreatorStart,
  getCreatorSuccess,
  getCurrentUserPostFailure,
  getCurrentUserPostStart,
  getCurrentUserPostSuccess,
  getPostsFailure,
  getPostsStart,
  getPostsSuccess,
  setCommentsFailure,
  setCommentsStart,
} from "./postSlice";
import { getUsersFailure, getUsersStart, getUsersSuccess } from "./userSlice";

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};

export const register = async (
  email,
  password,
  username,
  photoURL = "https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: username, photoURL });
    const docRef = doc(db, "users", res.user.uid);
    await setDoc(docRef, { username, photoURL });
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const colRef = collection(db, "users");
    const users = await getDocs(colRef);
    const arrUser = users.docs.map((doc) => {
      return { id: doc.id, data: doc.data() };
    });
    dispatch(getUsersSuccess(arrUser));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

export const addPost = async (dispatch, content, image, navigation) => {
  dispatch(createPostsStart());
  try {
    const colRef = collection(db, "posts");
    const newPost = await addDoc(colRef, {
      userId: auth.currentUser.uid,
      content,
      timestamp: serverTimestamp(),
      image,
    });
    const res = await getDoc(doc(db, "posts", newPost.id));
    dispatch(createPostsSuccess({ id: res.id, data: res.data() }));
    navigation.goBack();
  } catch (err) {
    dispatch(createPostsFailure());
  }
};

export const getPosts = async (dispatch) => {
  dispatch(getPostsStart());
  try {
    const colRef = collection(db, "posts");
    const res = await getDocs(colRef);
    const posts = res.docs.map((doc) => {
      return { id: doc.id, data: doc.data() };
    });
    dispatch(getPostsSuccess(posts));
  } catch (err) {
    dispatch(getPostsFailure());
  }
};

export const getCurrentUserPost = async (dispatch) => {
  dispatch(getCurrentUserPostStart());
  try {
    const colRef = collection(db, "posts");
    const q = query(colRef, where("userId", "==", auth.currentUser.uid));
    const res = await getDocs(q);
    const posts = res.docs.map((doc) => {
      return { id: doc.id, data: doc.data() };
    });
    dispatch(getCurrentUserPostSuccess(posts));
  } catch (err) {
    dispatch(getCurrentUserPostFailure());
  }
};

export const getCreator = async (dispatch, userId) => {
  dispatch(getCreatorStart());
  try {
    const docRef = doc(db, "users", userId);
    const res = await getDoc(docRef);
    dispatch(getCreatorSuccess(res.data()));
  } catch (error) {
    dispatch(getCreatorFailure());
  }
};

export const commentPost = async (dispatch, comment, postId, userId) => {
  dispatch(setCommentsStart());
  try {
    const docRef = doc(db, "posts", postId);
    await setDoc(
      docRef,
      {
        comments: arrayUnion({ text: comment, userId }),
      },
      { merge: true }
    );
  } catch (error) {
    dispatch(setCommentsFailure());
  }
};
