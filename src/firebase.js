// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_JGo_nL4Rtt0XCjZA-OiNyOSXC2wpSA",
  authDomain: "netflix-react-yt.firebaseapp.com",
  projectId: "netflix-react-yt",
  storageBucket: "netflix-react-yt.appspot.com",
  messagingSenderId: "256300541811",
  appId: "1:256300541811:web: 41d5459b54c7015f6cc706",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
