import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB95d4onD74nM2cn1TJuRTpW4JLyUMPT5s",
    authDomain: "socialmediaapp-bfc15.firebaseapp.com",
    projectId: "socialmediaapp-bfc15",
    storageBucket: "socialmediaapp-bfc15.appspot.com",
    messagingSenderId: "144832025545",
    appId: "1:144832025545:web:19e08a4b5494872ee34e18"
};

// Initialize Firebase
//to less prone to error we will check for existing app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }