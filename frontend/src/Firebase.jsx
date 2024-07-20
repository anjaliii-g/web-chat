// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBH4oY9iC7PZpb7MJZ5E9PRUbhY6r5qW8I",
//   authDomain: "server-7fd2e.firebaseapp.com",
//   projectId: "server-7fd2e",
//   storageBucket: "server-7fd2e.appspot.com",
//   messagingSenderId: "818512922787",
//   appId: "1:818512922787:web:a73de4d34bb9cbd57e9716"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH4oY9iC7PZpb7MJZ5E9PRUbhY6r5qW8I",
    authDomain: "server-7fd2e.firebaseapp.com",
    projectId: "server-7fd2e",
    storageBucket: "server-7fd2e.appspot.com",
    messagingSenderId: "818512922787",
    appId: "1:818512922787:web:a73de4d34bb9cbd57e9716"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);