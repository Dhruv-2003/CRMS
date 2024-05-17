// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMpVFf0efu27TMW8IXHNF6wv8wBqltCr4",
  authDomain: "next-app-4bebf.firebaseapp.com",
  projectId: "next-app-4bebf",
  storageBucket: "next-app-4bebf.appspot.com",
  messagingSenderId: "647124985836",
  appId: "1:647124985836:web:de7db0ddbdefc6532d02c9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
