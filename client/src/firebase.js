// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-148c2.firebaseapp.com",
  projectId: "mern-estate-148c2",
  storageBucket: "mern-estate-148c2.appspot.com",
  messagingSenderId: "665657508504",
  appId: "1:665657508504:web:680870c9fe35031cff46ed"
};
export const app = initializeApp(firebaseConfig);
