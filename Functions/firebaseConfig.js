// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAL9a9dH5D0WzW5PwrlIX-KVj7jxGjBeEQ",
    authDomain: "web-app-development-4761c.firebaseapp.com",
    databaseURL: "https://web-app-development-4761c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "web-app-development-4761c",
    storageBucket: "web-app-development-4761c.appspot.com",
    messagingSenderId: "362560056887",
    appId: "1:362560056887:web:4b460f6c08eba94269d9b2",
    measurementId: "G-RV7RMLH579"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;