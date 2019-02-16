import firebase from 'firebase/app';
import 'firebase/firestore';
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

const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
export default firebase;
