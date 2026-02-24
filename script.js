import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiyCOFX-g6U8HhXhuQ89qgYZAAC3tP9U4",
  authDomain: "chatnew-5eaa5.firebaseapp.com",
  projectId: "chatnew-5eaa5",
  storageBucket: "chatnew-5eaa5.firebasestorage.app",
  messagingSenderId: "619458250839",
  appId: "1:619458250839:web:67d5c5d96a65d5f1ff3b12"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase berhasil connect!");