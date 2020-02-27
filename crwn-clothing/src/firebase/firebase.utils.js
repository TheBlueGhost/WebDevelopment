import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_iSo4epFeEmhP2V-QNBTqFAstSrkyFx4",
    authDomain: "crwn-db-2aecf.firebaseapp.com",
    databaseURL: "https://crwn-db-2aecf.firebaseio.com",
    projectId: "crwn-db-2aecf",
    storageBucket: "crwn-db-2aecf.appspot.com",
    messagingSenderId: "109140672629",
    appId: "1:109140672629:web:74d033e60239064c57383c",
    measurementId: "G-PXV0V57FR1"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData  
        })
      }catch(error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;