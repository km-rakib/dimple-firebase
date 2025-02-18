// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYEDmV_6qU_fA-W-rXbBLkO--2EFHpIWI",
  authDomain: "dimple-firebase-d04c6.firebaseapp.com",
  projectId: "dimple-firebase-d04c6",
  storageBucket: "dimple-firebase-d04c6.firebasestorage.app",
  messagingSenderId: "827652711642",
  appId: "1:827652711642:web:2ab77f17a1fd47fe0f71e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);