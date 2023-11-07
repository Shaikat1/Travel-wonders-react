// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9xekMzNUU_fYC_Zb5TGXDkwBevj-BeNk",
  authDomain: "tour-and-guide-authentication.firebaseapp.com",
  projectId: "tour-and-guide-authentication",
  storageBucket: "tour-and-guide-authentication.appspot.com",
  messagingSenderId: "449142829392",
  appId: "1:449142829392:web:80b00972bdcf03f6863c55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;