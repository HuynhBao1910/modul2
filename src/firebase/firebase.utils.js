import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCmJa3N82q7gOTCh0ngrsGq5ncMZBZBDk0",
    authDomain: "modul2-df175.firebaseapp.com",
    projectId: "modul2-df175",
    storageBucket: "modul2-df175.appspot.com",
    messagingSenderId: "230219585527",
    appId: "1:230219585527:web:6a8dd673a877507d4400f2",
    measurementId: "G-PZFP17ZMG5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                role: "user",
                ...additionalData,
            });
        } catch (error) {
            console.error("Error creating user: ", error.message);
        }
    }

    return userRef;
};

export default firebase;