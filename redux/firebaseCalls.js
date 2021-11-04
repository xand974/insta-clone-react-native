import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { getPostsFailure, getPostsStart, getPostsSuccess } from "./postSlice";
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
