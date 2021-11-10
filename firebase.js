import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA3VsfVleRbgsolGZhE5BZ6lN5tb_mw984",
    authDomain: "socialmedia-app-302ac.firebaseapp.com",
    projectId: "socialmedia-app-302ac",
    storageBucket: "socialmedia-app-302ac.appspot.com",
    messagingSenderId: "643835482861",
    appId: "1:643835482861:web:7fa0e5ee47f60ab7b532e4",
    measurementId: "G-EWHPC5SNLT"
};

// Initialize Firebase
//to less prone to error we will check for existing app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }