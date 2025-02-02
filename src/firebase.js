// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Auth
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage"; // Import Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYn-H-EONxUrCOEVUuKJWnuaZ_JoPoXmw",
  authDomain: "anytimefitness-36efa.firebaseapp.com",
  projectId: "anytimefitness-36efa",
  storageBucket: "anytimefitness-36efa.appspot.com",
  messagingSenderId: "724501174682",
  appId: "1:724501174682:web:0d0406037070fba4d50223",
  measurementId: "G-GQK5T5MM42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
const auth = getAuth(app); // Initialize Auth
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Storage

export { auth, db, storage }; // Export the services
