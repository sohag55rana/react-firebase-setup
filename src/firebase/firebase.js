// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBj52EqNWB-F1f61wd9c__mGVjW4TyKTw0",
    authDomain: "react-firebase-setup-cd657.firebaseapp.com",
    projectId: "react-firebase-setup-cd657",
    storageBucket: "react-firebase-setup-cd657.firebasestorage.app",
    messagingSenderId: "775031064838",
    appId: "1:775031064838:web:eb358805c7f5eb0b5db687"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);