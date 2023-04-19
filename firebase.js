// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"

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
const auth = getAuth();
const database = getDatabase(app);
console.log(app.options)

const signupbuyer = document.getElementById('signup');
var email = document.getElementById('sbemail').value;
var password = document.getElementById('sbpassword').value;

signupbuyer.addEventListener('submit', (e) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('User created successfully')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})

function login(){
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
}