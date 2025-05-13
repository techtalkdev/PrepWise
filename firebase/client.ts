import { initializeApp, getApps, getApp } from "firebase/app";
import  { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDzgIv7nrUHWg9EbEsYjSVJfe231Poo_M",
  authDomain: "prepwise-f32aa.firebaseapp.com",
  projectId: "prepwise-f32aa",
  storageBucket: "prepwise-f32aa.firebasestorage.app",
  messagingSenderId: "13714617720",
  appId: "1:13714617720:web:308ef07edcf23943ad048d",
  measurementId: "G-4M1LBKZWD2"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app); 
export const db = getFirestore(app);
