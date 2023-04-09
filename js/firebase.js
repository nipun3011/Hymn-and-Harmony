// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLNJsLI1wKYCi52LdAQDj2z-i4grMIeio",
  authDomain: "fir-frontend-43825.firebaseapp.com",
  projectId: "fir-frontend-43825",
  storageBucket: "fir-frontend-43825.appspot.com",
  messagingSenderId: "251589584321",
  appId: "1:251589584321:web:2e5d23fda4c4b37f62fb40",
  measurementId: "G-CFP93EYPH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const autho = getAuth(app)
firebase.auth()
console.log(app.options)