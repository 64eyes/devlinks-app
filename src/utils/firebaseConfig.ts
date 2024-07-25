// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUjbGDshY_Rb6fK6d8zq6k-wv6pGEW58g",
  authDomain: "devlinks-app-a4416.firebaseapp.com",
  projectId: "devlinks-app-a4416",
  storageBucket: "devlinks-app-a4416.appspot.com",
  messagingSenderId: "329619837899",
  appId: "1:329619837899:web:86d2ad184f8470d9155c4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };