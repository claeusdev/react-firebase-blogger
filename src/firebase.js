import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAgbGyEllU-3Y3QWh9e9_3c4PIbi43ojEc',
  authDomain: 'bloggg-424db.firebaseapp.com',
  databaseURL: 'https://bloggg-424db.firebaseio.com',
  projectId: 'bloggg-424db',
  storageBucket: 'bloggg-424db.appspot.com',
  messagingSenderId: '723248875779'
};
firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) {
    return;
  }

  // Get a reference to the place where user profile might be
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch document from that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = (uid) => {
  if (!uid) return null;
  try {
    return firestore.collection('users').doc(uid);
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
};
export default firebase;
