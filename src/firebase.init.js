// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfZop_AydoMntm1Izg_I2k70PacxvTnDY",
    authDomain: "to-do-21dee.firebaseapp.com",
    projectId: "to-do-21dee",
    storageBucket: "to-do-21dee.appspot.com",
    messagingSenderId: "521221668155",
    appId: "1:521221668155:web:e7c5af3737169259cf0b1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;