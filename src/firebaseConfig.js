// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS-w2urFmIW_-YxkV567EfQTMv-DdXcG8",
  authDomain: "eexorigin-583cf.firebaseapp.com",
  projectId: "eexorigin-583cf",
  storageBucket: "eexorigin-583cf.firebasestorage.app",
  messagingSenderId: "886771982943",
  appId: "1:886771982943:web:1b5b0fe60d355fdfe271ea",
  measurementId: "G-LV8X3SDYN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore for use in other parts of your app
export { db };
