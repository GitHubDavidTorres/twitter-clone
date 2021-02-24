import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyArkTt3N8DmUtwT8wQ-kG84inGCUbpbdow',
  authDomain: 'twitter-clone-eb333.firebaseapp.com',
  projectId: 'twitter-clone-eb333',
  storageBucket: 'twitter-clone-eb333.appspot.com',
  messagingSenderId: '429305731042',
  appId: '1:429305731042:web:7491e08f6e8a5d670ecbbb',
  measurementId: 'G-J14TBVDZ5D',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;