import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyAhcgaQALnPai5ehdm619vPwC03aMbrT00",
  authDomain: "penguinsky-48898.firebaseapp.com",
  databaseURL: "https://penguinsky-48898-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "penguinsky-48898",
  storageBucket: "penguinsky-48898.firebasestorage.app",
  messagingSenderId: "728713120143",
  appId: "1:728713120143:web:0fa514dc6f14a7268de3fa"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)