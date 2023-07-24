// Import Firebase SDK and specific modules
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCf4MNT60BFlgF0MqmYLULaGbSD2HuBqi4",
  authDomain: "markethub-f6f5e.firebaseapp.com",
  projectId: "markethub-f6f5e",
  storageBucket: "markethub-f6f5e.appspot.com",
  messagingSenderId: "931912063437",
  appId: "1:931912063437:web:0d04ad8ea6fe30ba674c84"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Access specific Firebase modules
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
