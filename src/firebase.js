import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK-sTaYvAmFnlgQqj0rdt9V-NPkWdAroE",
  authDomain: "kjr---die-leiterrunde.firebaseapp.com",
  projectId: "kjr---die-leiterrunde",
  storageBucket: "kjr---die-leiterrunde.appspot.com",
  messagingSenderId: "515233852013",
  appId: "1:515233852013:web:58577ad20c810ed4ea6d64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Auth
export const auth = getAuth(app);

//Firestore
export const firestore = getFirestore(app);

//Functions
export const functions = getFunctions(app);

//Storage
export const storage = getStorage(app);