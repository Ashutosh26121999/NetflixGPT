// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDWoi8R2Fj8bZoq3ciS5JPu-m0RE5nA0s",
  authDomain: "netflixgpt-5113a.firebaseapp.com",
  projectId: "netflixgpt-5113a",
  storageBucket: "netflixgpt-5113a.firebasestorage.app",
  messagingSenderId: "175883948253",
  appId: "1:175883948253:web:fbcc0815533dfe3e114b34",
  measurementId: "G-9W0ZP7XQ1F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
