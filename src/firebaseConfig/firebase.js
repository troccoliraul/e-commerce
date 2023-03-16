// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqUlv8GBmA9fHuKAbPqTiH28FOds8DFoY",
  authDomain: "coderhouse-ecommerce-4d6d2.firebaseapp.com",
  projectId: "coderhouse-ecommerce-4d6d2",
  storageBucket: "coderhouse-ecommerce-4d6d2.appspot.com",
  messagingSenderId: "679788439316",
  appId: "1:679788439316:web:43ddfd9a2651d7b8604401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)