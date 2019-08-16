import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJgJt3sk2cFaDovU7xnZ5MtxqZ_TLCC3g",
    authDomain: "ecommerce-project-f70c3.firebaseapp.com",
    databaseURL: "https://ecommerce-project-f70c3.firebaseio.com",
    projectId: "ecommerce-project-f70c3",
    storageBucket: "",
    messagingSenderId: "198972401024",
    appId: "1:198972401024:web:7912286b066c0f5b"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;