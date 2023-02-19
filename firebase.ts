import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkkEE2Qf1N3wbiZpgRiWtBHRiTd-ffCeU",
  authDomain: "chat-gpt-c65d7.firebaseapp.com",
  projectId: "chat-gpt-c65d7",
  storageBucket: "chat-gpt-c65d7.appspot.com",
  messagingSenderId: "1073650103547",
  appId: "1:1073650103547:web:4d6060ad7be7b7990b6c5e",
  measurementId: "G-1T3T0M7GWY"
};

// Initialize Firebase
const app = (getApps().length) ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
