import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWvONnRUUSIwdFfy3M6UTpTmjQ31YsNHo",
  authDomain: "putkrulyu.firebaseapp.com",
  projectId: "putkrulyu",
  storageBucket: "putkrulyu.firebasestorage.app",
  messagingSenderId: "191699580233",
  appId: "1:191699580233:web:2bc4aac6e950ee70635698",
  measurementId: "G-QHQ60Y1YME"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);