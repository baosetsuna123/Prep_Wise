
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVs754QuIGEeoZfJ_e-tOMW2Qjgj_W4ME",
  authDomain: "gen-lang-client-0699264730.firebaseapp.com",
  projectId: "gen-lang-client-0699264730",
  storageBucket: "gen-lang-client-0699264730.firebasestorage.app",
  messagingSenderId: "1061706246902",
  appId: "1:1061706246902:web:e3cbdbc03d4ab4d1e8dad7",
  measurementId: "G-DB4LXNNCGZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)