import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBaj89rraxCVFSMPN_z17c2gL2EuuU5VZ0",
  authDomain: "shop-db-dab8b.firebaseapp.com",
  projectId: "shop-db-dab8b",
  storageBucket: "shop-db-dab8b.appspot.com",
  messagingSenderId: "56679147657",
  appId: "1:56679147657:web:06a8ec081391b81481fe58",
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
