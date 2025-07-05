

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIiSdsy07B4y9lJW60hstl2QLtERHZ3E0",
  authDomain: "bookie-b932b.firebaseapp.com",
  projectId: "bookie-b932b",
  storageBucket: "bookie-b932b.firebasestorage.app",
  messagingSenderId: "1030004054709",
  appId: "1:1030004054709:web:04bc5084dd2444bb4dbcfc"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
