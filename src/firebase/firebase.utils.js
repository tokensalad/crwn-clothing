import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyA9MqqxFHr04cFD2K3ukKKobZDFXp8lqv8",
    authDomain: "crwn-db-b0c60.firebaseapp.com",
    projectId: "crwn-db-b0c60",
    storageBucket: "crwn-db-b0c60.appspot.com",
    messagingSenderId: "709755528869",
    appId: "1:709755528869:web:04d565dd7875e012804f4c",
    measurementId: "G-87GCZSPYZR"
  };

export const createUserProfileDocument =   async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

