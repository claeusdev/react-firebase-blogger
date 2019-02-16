import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
export default firebase;
