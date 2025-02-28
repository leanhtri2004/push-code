import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnzV91kRv-IozAOjj78K52SiH0jklONr4",
  authDomain: "luyentap2-1f3b4.firebaseapp.com",
  databaseURL: "https://luyentap2-1f3b4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "luyentap2-1f3b4",
  storageBucket: "luyentap2-1f3b4.firebasestorage.app",
  messagingSenderId: "35269720463",
  appId: "1:35269720463:web:aee9903f8e36442208b3fa",
  measurementId: "G-2LBGTBTV2X"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { app, firestore };
// Initialize Firebase
