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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          name : displayName, 
          email, 
          createdAt,
          ...additionalData
        })
        console.log('Synchronization succeeded');
      } catch (error) {
        console.log('Synchronization failed', error.message);
      }
    }
    return userRef
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef.get())


    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      console.log(newDocRef)
      batch.set(newDocRef, obj)
    })

    return await batch.commit()
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map( doc => {
      const { title, items } = doc.data()

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    })
    return transformedCollections.reduce( (acc, collection) => {
      acc[collection.title.toLowerCase()] = collection
      return acc
    }, {})
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;