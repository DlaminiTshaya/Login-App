import firebase from 'firebase';
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBU_GNovDB2jcUsC8AVR7bhy18-QOw5kNg",
    authDomain: "first-project-87129.firebaseapp.com",
    projectId: "first-project-87129",
    storageBucket: "first-project-87129.appspot.com",
    messagingSenderId: "643727129429",
    appId: "1:643727129429:web:cf5fa12bfce39ef210cddc",
    measurementId: "G-DP030CT29M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}