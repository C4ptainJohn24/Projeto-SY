import firebase from "firebase/compat/app";
// Other libraries might need to also be prefixed with "compat":
import "firebase/compat/auth";
import { getDatabase } from 'firebase/database'



const firebaseConfig = {
    apiKey: "AIzaSyDeWG85N1araR2CtLcRSSbRnQaOhKP46Pg",
    authDomain: "login-a7eb1.firebaseapp.com",
    databaseURL: "https://login-a7eb1-default-rtdb.firebaseio.com/",
    projectId: "login-a7eb1",
    storageBucket: "login-a7eb1.appspot.com",
    messagingSenderId: "599476209422",
    appId: "1:599476209422:web:a9ccd06c0fb887fa11395f",
    measurementId: "G-DP8W41T9RF"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = getDatabase();
export { auth, db };



