// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmJa3N82q7gOTCh0ngrsGq5ncMZBZBDk0",
    authDomain: "modul2-df175.firebaseapp.com",
    projectId: "modul2-df175",
    storageBucket: "modul2-df175.appspot.com",
    messagingSenderId: "230219585527",
    appId: "1:230219585527:web:6a8dd673a877507d4400f2",
    measurementId: "G-PZFP17ZMG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);