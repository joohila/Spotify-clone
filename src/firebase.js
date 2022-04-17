import firebase from 'firebase'
// this is firebase 7 version for 8,9 and above import process changes 
const firebaseConfig = {
  apiKey: "AIzaSyAcAaujmBydW-7Hczu1pAJ_o0K9rfgNOvA",
  authDomain: "joohila-spotify-clone.firebaseapp.com",
  projectId: "joohila-spotify-clone",
  storageBucket: "joohila-spotify-clone.appspot.com",
  messagingSenderId: "196740070493",
  appId: "1:196740070493:web:7931af3c0d0cce31bb61b4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage};

