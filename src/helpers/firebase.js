// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from '../helpers/ToastNotify';



const firebaseConfig = {
  apiKey: "AIzaSyBqYCswhPRaNxl8YGOWgVyWf0hULWb2CYc",
  authDomain: "kverse-d8c37.firebaseapp.com",
  databaseURL: "https://kverse-d8c37-default-rtdb.firebaseio.com",
  projectId: "kverse-d8c37",
  storageBucket: "kverse-d8c37.appspot.com",
  messagingSenderId: "1088989068956",
  appId: "1:1088989068956:web:5cb3f7d9db0b12c2927759",
  measurementId: "G-RK86235DV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);