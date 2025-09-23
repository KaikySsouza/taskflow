// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAixAG1OfTzGgUDtdnKDccxFrk7qbM27lg",
  authDomain: "taskflow-1cb86.firebaseapp.com",
  databaseURL: "https://taskflow-1cb86-default-rtdb.firebaseio.com/",
  projectId: "taskflow-1cb86",
  storageBucket: "taskflow-1cb86.firebasestorage.app",
  messagingSenderId: "412944388626",
  appId: "1:412944388626:web:67c4cab3fb4913a58abecb",
  measurementId: "G-EQ4QB6B3W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);