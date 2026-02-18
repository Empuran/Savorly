import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    projectId: "savorly-50631",
    appId: "1:691318848071:web:0baa20ba86389b18688f62",
    storageBucket: "savorly-50631.firebasestorage.app",
    apiKey: "AIzaSyBIF1STEkwipmKnkDRynOVfxs8RmeoX5OU",
    authDomain: "savorly-50631.firebaseapp.com",
    messagingSenderId: "691318848071",
    measurementId: "G-91142SSHYL"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
