//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqfa6TOka4UEmF5zXMcqPZfYz5m1G_guA",
  authDomain: "mern-food-website.firebaseapp.com",
  projectId: "mern-food-website",
  storageBucket: "mern-food-website.appspot.com",
  messagingSenderId: "938518523244",
  appId: "1:938518523244:web:0cda3df163ae33dec99749",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
