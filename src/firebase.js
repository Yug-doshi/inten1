import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqtVDt46Bc5PS5PSprMcK9-lBHSwvMimM",
  authDomain: "codevault-b48e5.firebaseapp.com",
  projectId: "codevault-b48e5",
  storageBucket: "codevault-b48e5.appspot.com",
  messagingSenderId: "105905557174",
  appId: "1:105905557174:web:da1f0db53f729b59a52017",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
