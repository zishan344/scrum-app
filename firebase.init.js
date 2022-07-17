// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASd97w_ozcVdI0RMctUaYXuWokU-Ct1fQ",
  authDomain: "scrum-app-d7ea3.firebaseapp.com",
  projectId: "scrum-app-d7ea3",
  storageBucket: "scrum-app-d7ea3.appspot.com",
  messagingSenderId: "164582714006",
  appId: "1:164582714006:web:7a886fcef5197afb37f0b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
