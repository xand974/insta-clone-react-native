import { initializeApp } from "firebase/app";
import { REACT_APP_FIREBASE_KEY } from "@env";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_KEY,
  authDomain: "insta-react-native-1dd80.firebaseapp.com",
  projectId: "insta-react-native-1dd80",
  storageBucket: "insta-react-native-1dd80.appspot.com",
  messagingSenderId: "75692447796",
  appId: "1:75692447796:web:9bbd188f800a0ed264d261",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
