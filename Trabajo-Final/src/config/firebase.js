// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFzvntq2d2MpiZ4w5zXeC1bMEOgH710Wc",
  authDomain: "ecommerce-utn-814b3.firebaseapp.com",
  projectId: "ecommerce-utn-814b3",
  storageBucket: "ecommerce-utn-814b3.appspot.com",
  messagingSenderId: "163434770003",
  appId: "1:163434770003:web:5c003906ff8cdc54e9e0a6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
