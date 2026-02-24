// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiyCOFX-g6U8HhXhuQ89qgYZAAC3tP9U4",
  authDomain: "chatnew-5eaa5.firebaseapp.com",
  projectId: "chatnew-5eaa5",
  storageBucket: "chatnew-5eaa5.firebasestorage.app",
  messagingSenderId: "619458250839",
  appId: "1:619458250839:web:67d5c5d96a65d5f1ff3b12",
  measurementId: "G-972DB2RX41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);