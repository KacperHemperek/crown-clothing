import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB46gAF94cvFc9yIc84IwGbT0HUKS1TvhM",
  authDomain: "crown-db-a73b0.firebaseapp.com",
  projectId: "crown-db-a73b0",
  storageBucket: "crown-db-a73b0.appspot.com",
  messagingSenderId: "327983819295",
  appId: "1:327983819295:web:8265767c0ec77f7233432a",
  measurementId: "G-BHT1HX62Q5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;