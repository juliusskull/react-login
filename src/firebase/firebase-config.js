import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBGZfv9yn6OQFcv2ZDKCofPm8zTFqVeMDA",
    authDomain: "oficina-virtual-c864c.firebaseapp.com",
    projectId: "oficina-virtual-c864c",
    storageBucket: "oficina-virtual-c864c.appspot.com",
    messagingSenderId: "586382309473",
    appId: "1:586382309473:web:81be0d888ba4071479d220",
    measurementId: "G-TFQPYM6T1H"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}