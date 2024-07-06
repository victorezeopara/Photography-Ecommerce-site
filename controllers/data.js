// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { app } from "./firebase-config.js";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, setDoc, doc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FirebaseAPIKey,
  authDomain: "photographypage-ade5b.firebaseapp.com",
  projectId: "photographypage-ade5b",
  storageBucket: "photographypage-ade5b.appspot.com",
  messagingSenderId: "669478960740",
  appId: "1:669478960740:web:641b54d316e7aaa3c72971",
  measurementId: "G-JSX0CGRXH0",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseapp);
const db = getFirestore(firebaseapp);

export { db, firebaseapp };
