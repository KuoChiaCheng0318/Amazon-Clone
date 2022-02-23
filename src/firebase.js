import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnWzecE3dWwy2XFN38AIoE4WeaMern9Wc",
  authDomain: "clone4-c1856.firebaseapp.com",
  projectId: "clone4-c1856",
  storageBucket: "clone4-c1856.appspot.com",
  messagingSenderId: "189244074562",
  appId: "1:189244074562:web:a1a662eebbb19975789bdb",
  measurementId: "G-HW4DFSV5NF"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };