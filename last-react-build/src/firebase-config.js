// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCe9FWRfnBIjm8M10Ju2-b7nWt6TKttSd8",
  authDomain: "portfolio-56f29.firebaseapp.com",
  projectId: "portfolio-56f29",
  storageBucket: "portfolio-56f29.appspot.com",
  messagingSenderId: "608900456154",
  appId: "1:608900456154:web:fd07b4583f46b65d954fe3",
  measurementId: "G-2SV3H742NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);