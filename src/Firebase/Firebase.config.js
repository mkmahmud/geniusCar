// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjCya-be3Vnu3MvpmMCIQAE6xSSNEZJjo",
  authDomain: "genius-mk.firebaseapp.com",
  projectId: "genius-mk",
  storageBucket: "genius-mk.appspot.com",
  messagingSenderId: "233751880223",
  appId: "1:233751880223:web:35a8dec9995277f8e0ab2a",
  measurementId: "G-DD65BLSDLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app