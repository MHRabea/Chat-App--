
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyD5Qj8i7vTSdjsFEZzgFeOeISbTI3jMhR0",
  authDomain: "chat-5e7d3.firebaseapp.com",
  projectId: "chat-5e7d3",
  storageBucket: "chat-5e7d3.appspot.com",
  messagingSenderId: "92306001125",
  appId: "1:92306001125:web:bc77162271328c107d580c",
  measurementId: "G-EXPKPGD7CZ"
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();  