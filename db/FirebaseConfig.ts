// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyB_EREMu1aAmKD_MIn0vxJ8leVq6mlgqnM",
    authDomain: "lab2-backup.firebaseapp.com",
    projectId: "lab2-backup",
    storageBucket: "lab2-backup.appspot.com",
    messagingSenderId: "570628528262",
    appId: "1:570628528262:web:593cd4ee40e3d8c3881907"
  
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
//export const auth = getAuth(app)