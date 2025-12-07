// url=https://github.com/rafamsantos28/antplay-plus/blob/main/src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgxhr6jdwNJ0J-F4DM6Yii22SEMYqtgT0",
  authDomain: "antplay-b3d99.firebaseapp.com",
  projectId: "antplay-b3d99",
  storageBucket: "antplay-b3d99.appspot.com",
  messagingSenderId: "1025818751668",
  appId: "1:1025818751668:web:e4d8b576262dcc63555de1",
  measurementId: "G-QRWQ91HKBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
