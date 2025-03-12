// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAPzjizVYQUYhchOFpyuVEINDEdyxariRg",
  authDomain: "mediwatchdata.firebaseapp.com",
  projectId: "mediwatchdata",
  storageBucket: "mediwatchdata.firebasestorage.app",
  messagingSenderId: "872955644554",
  appId: "1:872955644554:web:b0e8337f81fc2354ce7b73"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
