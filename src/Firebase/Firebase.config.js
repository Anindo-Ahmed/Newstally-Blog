// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAywDG5OW_DARCdlu-FqSoeChknfPn0DxI",
  authDomain: "newstally-blogsites.firebaseapp.com",
  projectId: "newstally-blogsites",
  storageBucket: "newstally-blogsites.appspot.com",
  messagingSenderId: "46193841559",
  appId: "1:46193841559:web:b71581250bfade58e920d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;